import { Component, OnInit } from '@angular/core';
import { ChequeBook } from '../../../Models/chequebook';
import { RegularAccount } from '../../../Models/regularaccount';
import { Customer } from '../../../Models/customer';
import { ChequeBooksService } from '../../../Services/chequebooks.service';
import { RegularAccountsService } from '../../../Services/regularaccounts.service';
import { CustomersService } from '../../../Services/customers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from "jquery";
import { PecuniaComponentBase } from '../../../pecunia-component';

@Component({
  selector: 'app-chequebooks',
  templateUrl: './chequebooks.component.html',
  styleUrls: ['./chequebooks.component.scss']
})
export class ChequeBooksComponent extends PecuniaComponentBase implements OnInit {
  pendingchequebooks: ChequeBook[] = [];
  approvedchequebooks: ChequeBook[] = [];
  account: RegularAccount[] = [];
  customer: Customer[] = [];
  showCustomerDetails: boolean = false;
  showChequeBookHistory: boolean = false;
  showNewChequeBook: boolean = false;
  showPendingChequeBookHistory: boolean = false;
  accountForm: FormGroup;
  newChequeBookDisabled: boolean = false;
  showSpinner: boolean = false;
  newAccountFormErrorMessages: any;



  constructor(private chequebooksService: ChequeBooksService, private regularaccountsService: RegularAccountsService, private customersService: CustomersService) {
    super();
    this.accountForm = new FormGroup({
      accountNo: new FormControl(null, [Validators.required]),
      seriesStart: new FormControl(null, [Validators.required]),
      numberOfLeaves: new FormControl(null, [Validators.required]),
      customerName: new FormControl,
      customerMobile: new FormControl,
      branchName: new FormControl
    });



    this.newAccountFormErrorMessages = {
      seriesStart: { required: "Series start can't be blank" },
      numberOfLeaves: { required: "Number of leaves can't be blank" }

    };

  }

  ngOnInit() {
    this.showSpinner = false;
  }

  onOkClick() {
    var accountnumber = this.accountForm.value;

    this.regularaccountsService.GetAccountByAccountNo(accountnumber.accountNo).subscribe(
      (getResponse) => {
        this.account = getResponse;

        if (this.account[0] != null) {

          this.showCustomerDetails = true;
          this.showChequeBookHistory = true;
          this.showNewChequeBook = true;

          var requested = "Requested";
          var approved = "Approved";
          this.customersService.GetCustomerByCustomerID(this.account[0].customerID).subscribe(
            (customerresponse) => {
              this.customer = customerresponse;
              this.accountForm.patchValue({
                customerName: this.customer[0].customerName,
                customerMobile: this.customer[0].customerMobile,
                branchName: this.account[0].branch,

              });
            })

          this.chequebooksService.GetChequeBooksByAccountIDAndStatus(this.account[0].accountID, approved).subscribe((response) => {

            this.approvedchequebooks = response;
            console.log("Done");
            console.log(response);

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
        this.showChequeBookHistory = false;
        this.showNewChequeBook = false;
      }
    )
  }



  onAddChequeBookClick(event) {
    this.accountForm["submitted"] = true;
    if (this.accountForm.valid) {
      this.newChequeBookDisabled = true;
      this.showPendingChequeBookHistory = true;
      var acc = this.accountForm.value;
      var requested = "Requested";
      console.log(this.accountForm.value);
      var chequebook: ChequeBook = new ChequeBook(0, null, this.account[0].accountID, this.account[0].accountNo,
        this.accountForm.value.seriesStart, this.accountForm.value.numberOfLeaves, "Requested", null, null);

      this.chequebooksService.AddChequeBook(chequebook).subscribe((addResponse) => {

        this.newChequeBookDisabled = false;
        this.showSpinner = true;

        this.chequebooksService.GetChequeBooksByAccountIDAndStatus(this.account[0].accountID, requested).subscribe((getResponse) => {

          this.showSpinner = false;
          this.pendingchequebooks = getResponse;
          alert(this.pendingchequebooks.length);
        }, (error) => {
          console.log(error);
        });
      },
        (error) => {
          console.log(error);
          this.newChequeBookDisabled = false;
        });
    }
    else {
      super.getFormGroupErrors(this.accountForm);
    }
  }

  onApproveChequeBookClick(index: number) {


    var acc = this.accountForm.value;
    var requested = "Requested";
    var approved = "Approved";

    var chequebook: ChequeBook = this.pendingchequebooks[index];

    this.chequebooksService.UpdateChequeBook(chequebook).subscribe((updateResponse) => {
      this.chequebooksService.GetChequeBooksByAccountIDAndStatus(this.account[0].accountID, requested).subscribe((getResponse) => {
        this.showPendingChequeBookHistory = true;
        this.showSpinner = false;
        this.pendingchequebooks = getResponse;

      }, (error) => {
        console.log(error);
      });
      this.chequebooksService.GetChequeBooksByAccountIDAndStatus(this.account[0].accountID, approved).subscribe((getResponse) => {
        this.showChequeBookHistory = true;
        this.showSpinner = false;
        this.approvedchequebooks = getResponse;
        alert(this.approvedchequebooks.length);
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
