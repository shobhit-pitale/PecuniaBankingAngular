import { Component, OnInit } from '@angular/core';
import { DebitCard } from '../../../Models/debitcard';
import { RegularAccount } from '../../../Models/regularaccount';
import { Customer } from '../../../Models/customer';
import { DebitCardsService } from '../../../Services/debitcards.service';
import { RegularAccountsService } from '../../../Services/regularaccounts.service';
import { CustomersService } from '../../../Services/customers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from "jquery";
import { PecuniaComponentBase } from '../../../pecunia-component';

@Component({
  selector: 'app-debitcards',
  templateUrl: './debitcards.component.html',
  styleUrls: ['./debitcards.component.scss']
})
export class DebitCardsComponent extends PecuniaComponentBase implements OnInit {

  blockeddebitcards: DebitCard[] = [];
  issueddebitcards: DebitCard[] = [];
  debitcards: DebitCard[] = [];
  account: RegularAccount[] = [];
  customer: Customer[] = [];
  showCustomerDetails: boolean = false;
  showIssuedDebitCardHistory: boolean = false;
  showBlockedDebitCardHistory: boolean = false;
  showNewDebitCard: boolean = false;
  accountForm: FormGroup;
  newDebitCardDisabled: boolean = false;
  showSpinner: boolean = false;
  newAccountFormErrorMessages: any;

  newCardNo: number =0;
  constructor(private debitcardsService: DebitCardsService, private regularaccountsService: RegularAccountsService, private customersService: CustomersService) {
    super();
    this.accountForm = new FormGroup({
      accountNo: new FormControl(null, [Validators.required]),
      customerNameAsPerCard: new FormControl(null, [Validators.required]),
      cardType: new FormControl(null, [Validators.required]),

      customerName: new FormControl,
      customerMobile: new FormControl,
      branchName: new FormControl
    });

    this.newAccountFormErrorMessages = {

      customerNameAsPerCard: { required: "Customer Name can't be blank" },
      cardType: { required: "Card type cannot be blank" }
    };

  }

  ngOnInit() {
    this.showSpinner = true;
    this.debitcardsService.GetAllDebitCards().subscribe((response) => {
      this.debitcards = response;
      this.showSpinner = false;

      for (var i = 0; i < this.debitcards.length; i++) {
        this.newCardNo = this.debitcards[i].cardNumber;
      }
      this.newCardNo += 1;
    }, (error) => {

      console.log(error);
  })
}

  onOkClick() {
    var accountnumber = this.accountForm.value;

    this.regularaccountsService.GetAccountByAccountNo(accountnumber.accountNo).subscribe(
      (getResponse) => {
        this.account = getResponse;
       
        if (this.account[0] != null) {

          this.showCustomerDetails = true;
          this.showBlockedDebitCardHistory = true;
          this.showNewDebitCard = true;
          var status = "Blocked";
        
          this.customersService.GetCustomerByCustomerID(this.account[0].customerID).subscribe(
            (customerresponse) => {
              this.customer = customerresponse;
              this.accountForm.patchValue({
                customerName: this.customer[0].customerName,
                customerMobile: this.customer[0].customerMobile,
                branchName: this.account[0].branch,

              });
            })

          this.debitcardsService.GetDebitCardsByAccountIDAndStatus(this.account[0].accountID,status).subscribe((response) => {
           
            this.blockeddebitcards = response;
            
           

          }, (error) => {
            console.log(error);
          }
          )
        }
        else {
          alert("No account exists");
        }
      }, (error) => {
        console.log(error);
        this.showCustomerDetails = false;
        this.showBlockedDebitCardHistory = false;
        this.showNewDebitCard = false;
       
      }
    )
  }
  onAddDebitCardClick(event) {
    this.accountForm["submitted"] = true;
    if (this.accountForm.valid) {
      this.newDebitCardDisabled = true;
      this.showIssuedDebitCardHistory = true;
      var acc = this.accountForm.value;
      var active = "Active";
      var debitcard: DebitCard = new DebitCard(0, null, this.account[0].accountID,this.accountForm.value.customerNameAsPerCard,100000,null, this.accountForm.value.cardType, "Active", null, null);

     
      this.debitcardsService.AddDebitCard(debitcard,this.newCardNo).subscribe((addResponse) => {
        this.newDebitCardDisabled = false;
        this.showSpinner = true;
        this.newCardNo += 1;
        this.debitcardsService.GetDebitCardsByAccountIDAndStatus(this.account[0].accountID, active).subscribe((getResponse) => {
          this.showSpinner = false;
          this.issueddebitcards = getResponse;
        }, (error) => {
          console.log(error);
        });
      },
        (error) => {
          console.log(error);
          this.newDebitCardDisabled = false;
        });
    }
    else {
      super.getFormGroupErrors(this.accountForm);
    }
  }
  onBlockDebitCardClick(index:number) {
    var acc = this.accountForm.value;
    var active = "Active";
    var block = "Blocked";
    var debitcard: DebitCard = this.issueddebitcards[index]; 
    this.debitcardsService.UpdateDebitCardStatus(debitcard).subscribe((updateResponse) => {
      this.debitcardsService.GetDebitCardsByAccountIDAndStatus(this.account[0].accountID, active).subscribe((getResponse) => {
        this.showIssuedDebitCardHistory = true;
        this.showSpinner = false;
        this.issueddebitcards = getResponse;

      }, (error) => {
        console.log(error);
      });
      this.debitcardsService.GetDebitCardsByAccountIDAndStatus(this.account[0].accountID, block).subscribe((getResponse) => {
        this.showBlockedDebitCardHistory = true;
        this.showSpinner = false;
        this.blockeddebitcards = getResponse;
        
      }, (error) => {
        console.log(error);
      });

    })
  }
  getFormControlCssClass(formControl: FormControl, formGroup: FormGroup): any {
    return {
      'is-invalid': formControl.invalid && (formControl.dirty || formControl.touched || formGroup["submitted"]),
      'is-valid': formControl.valid && (formControl.dirty || formControl.touched || formGroup["submitted"])
    };
  }
  getFormControlErrorMessage(formControlName: string, validationProperty: string): string {
    return this.newAccountFormErrorMessages[formControlName][validationProperty];
  }
  getCanShowFormControlErrorMessage(formControlName: string, validationProperty: string, formGroup: FormGroup): boolean {
    return formGroup.get(formControlName).invalid && (formGroup.get(formControlName).dirty || formGroup.get(formControlName).touched || formGroup['submitted']) && formGroup.get(formControlName).errors[validationProperty];
  }



}
