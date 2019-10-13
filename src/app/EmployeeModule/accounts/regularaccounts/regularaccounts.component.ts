import { Component, OnInit } from '@angular/core';
import { RegularAccount } from '../../../Models/regularaccount';
import { RegularAccountsService } from '../../../Services/regularaccounts.service';
import { CustomersService } from '../../../Services/customers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from "jquery";
import { PecuniaComponentBase } from '../../../pecunia-component';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-regularaccounts',
  templateUrl: './regularaccounts.component.html',
  styleUrls: ['./regularaccounts.component.scss']
})
export class RegularAccountsComponent extends PecuniaComponentBase implements OnInit {
  regularaccounts: RegularAccount[] = [];
  customer: Customer[] = [];
  showRegularAccountSpinner: boolean = false;
  viewRegularAccountCheckBoxes: any;

  newAccountNo: number = 0;
  sortBy: string = "accountType";
  sortDirection: string = "ASC";

  newRegularAccountForm: FormGroup;
  newRegularAccountDisabled: boolean = false;
  newRegularAccountFormErrorMessages: any;

  editRegularAccountForm: FormGroup;
  editRegularAccountDisabled: boolean = false;
  editRegularAccountFormErrorMessages: any;

  deleteRegularAccountForm: FormGroup;
  deleteRegularAccountDisabled: boolean = false;

  constructor(private regularaccountsService: RegularAccountsService, private customersService: CustomersService) {
    super();

    this.newRegularAccountForm = new FormGroup({
      customerID: new FormControl(null, [Validators.required]),
      accountType: new FormControl(null, [Validators.required]),
      branch: new FormControl(null, [Validators.required]),
      minimumBalance: new FormControl(null, [Validators.required]),
      interestRate: new FormControl(null, [Validators.required]),
    });

    this.newRegularAccountFormErrorMessages = {
      //accountNo: { required: "AccountNo can't be blank", pattern: "10 digit Mobile number is required" },
      customerID: { required: "Customer ID can't be blank" },
      accountType: { required: "Account Type can't be blank" },
      branch: { required: "Branch can't be blank" },
      minimumBalance: { required: "Minimum Balance can't be blank" },
      interestRate: { required: "Interest Rate can't be blank" }
    };

    this.editRegularAccountForm = new FormGroup({
      id: new FormControl(null),
      accountID: new FormControl(null),
      customerID: new FormControl(null),
      accountNo: new FormControl(null),
      accountType: new FormControl(null, [Validators.required]),
      branch: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      currentBalance: new FormControl(null),
      minimumBalance: new FormControl(null, [Validators.required]),
      interestRate: new FormControl(null, [Validators.required]),
      creationDateTime: new FormControl(null),
      lastModifiedDateTime: new FormControl(null)

    });

    this.editRegularAccountFormErrorMessages = {
      accountType: { required: "Account Type can't be blank" },
      branch: { required: "Branch can't be blank" },
      minimumBalance: { required: "Minimum Balance can't be blank" },
      interestRate: { required: "Interest Rate can't be blank" }
    };


    this.viewRegularAccountCheckBoxes = {

      id: true,
      accountID: true,
      customerID: true,
      accountNo: true,
      accountType: true,
      branch: true,
      status: true,
      currentBalance: true,
      minimumBalance: true,
      interestRate: true,
      creationDateTime: true,
      lastModifiedDateTime: true
    };


    this.deleteRegularAccountForm = new FormGroup({
      id: new FormControl(null),
      accountID: new FormControl(null),
      customerID: new FormControl(null),
      accountNo: new FormControl(null),
      accountType: new FormControl(null),
      branch: new FormControl(null),
      status: new FormControl(null),
      currentBalance: new FormControl(null),
      minimumBalance: new FormControl(null),
      interestRate: new FormControl(null),
      creationDateTime: new FormControl(null),
      lastModifiedDateTime: new FormControl(null)
    });
  }

  ngOnInit() {
    this.showRegularAccountSpinner = true;
    this.regularaccountsService.GetAllAccounts().subscribe((response) => {
      this.regularaccounts = response;
      this.showRegularAccountSpinner = false;

      for (var i = 0; i < this.regularaccounts.length; i++) {
        this.newAccountNo = this.regularaccounts[i].accountNo;
      }
      this.newAccountNo += 1;

    }, (error) => {
      console.log(error);
    })
  }



  onCreateRegularAccountClick() {
    this.newRegularAccountForm.reset();
    this.newRegularAccountForm["submitted"] = false;
  }


  onAddRegularAccountClick(event) {
    this.newRegularAccountForm["submitted"] = true;
    if (this.newRegularAccountForm.valid) {
      this.newRegularAccountDisabled = true;
      var regularaccount: RegularAccount = this.newRegularAccountForm.value;

      this.customersService.GetCustomerByCustomerID(regularaccount.customerID).subscribe((customerresponse) => {
        this.customer = customerresponse;

        if (this.customer[0] != null) {

          this.regularaccountsService.CreateAccount(regularaccount, this.newAccountNo).subscribe((addResponse) => {
            this.newRegularAccountForm.reset();
            $("#btnAddRegularAccountCancel").trigger("click");
            this.newRegularAccountDisabled = false;
            this.showRegularAccountSpinner = true;
            this.newAccountNo += 1;
          }, (error) => {
            console.log(error);
          });

          this.regularaccountsService.GetAllAccounts().subscribe((getResponse) => {
            this.showRegularAccountSpinner = false;
            this.regularaccounts = getResponse;
          }, (error) => {
            console.log(error);

          });
        }
        if (this.customer[0] == null) {
          alert("No customer with this Customer ID exists! Add this customer first.");
          //this.newRegularAccountDisabled = false;
        }
      }, (error) => {
        console.log(error);
        this.newRegularAccountDisabled = false;
      });

    }
    else {
      super.getFormGroupErrors(this.newRegularAccountForm);
    }
  }


  getFormControlCssClass(formControl: FormControl, formGroup: FormGroup): any {
    return {
      'is-invalid': formControl.invalid && (formControl.dirty || formControl.touched || formGroup["submitted"]),
      'is-valid': formControl.valid && (formControl.dirty || formControl.touched || formGroup["submitted"])
    };
  }

  getFormControlErrorMessage(formControlName: string, validationProperty: string): string {
    return this.newRegularAccountFormErrorMessages[formControlName][validationProperty];
  }

  getCanShowFormControlErrorMessage(formControlName: string, validationProperty: string, formGroup: FormGroup): boolean {
    return formGroup.get(formControlName).invalid && (formGroup.get(formControlName).dirty || formGroup.get(formControlName).touched || formGroup['submitted']) && formGroup.get(formControlName).errors[validationProperty];
  }



  onEditRegularAccountClick(index) {
    this.editRegularAccountForm.reset();
    this.editRegularAccountForm["submitted"] = false;
    this.editRegularAccountForm.patchValue({

      id: this.regularaccounts[index].id,
      accountID: this.regularaccounts[index].accountID,
      customerID: this.regularaccounts[index].customerID,
      accountNo: this.regularaccounts[index].accountNo,
      accountType: this.regularaccounts[index].accountType,
      branch: this.regularaccounts[index].branch,
      status: this.regularaccounts[index].status,
      currentBalance: this.regularaccounts[index].currentBalance,
      minimumBalance: this.regularaccounts[index].minimumBalance,
      interestRate: this.regularaccounts[index].interestRate,
      creationDateTime: this.regularaccounts[index].creationDateTime,
      lastModifiedDateTime: this.regularaccounts[index].lastModifiedDateTime

    });
  }

  onUpdateRegularAccountClick(event) {
    this.editRegularAccountForm["submitted"] = true;
    if (this.editRegularAccountForm.valid) {
      this.editRegularAccountDisabled = true;
      var regularaccount: RegularAccount = this.editRegularAccountForm.value;

      this.regularaccountsService.UpdateAccount(regularaccount).subscribe((updateResponse) => {
        this.editRegularAccountForm.reset();
        $("#btnUpdateRegularAccountCancel").trigger("click");
        this.editRegularAccountDisabled = false;
        this.showRegularAccountSpinner = true;

        this.regularaccountsService.GetAllAccounts().subscribe((getResponse) => {
          this.showRegularAccountSpinner = false;
          this.regularaccounts = getResponse;
        }, (error) => {
          console.log(error);
        });
      },
        (error) => {
          console.log(error);
          this.editRegularAccountDisabled = false;
        });
    }
    else {
      super.getFormGroupErrors(this.editRegularAccountForm);
    }
  }


  onDeleteRegularAccountClick(index) {
    this.deleteRegularAccountForm.reset();
    this.deleteRegularAccountForm["submitted"] = false;
    this.deleteRegularAccountForm.patchValue({

      id: this.regularaccounts[index].id,
      accountID: this.regularaccounts[index].accountID,
      customerID: this.regularaccounts[index].customerID,
      accountNo: this.regularaccounts[index].accountNo,
      accountType: this.regularaccounts[index].accountType,
      branch: this.regularaccounts[index].branch,
      status: this.regularaccounts[index].status,
      currentBalance: this.regularaccounts[index].currentBalance,
      minimumBalance: this.regularaccounts[index].minimumBalance,
      interestRate: this.regularaccounts[index].interestRate,
      creationDateTime: this.regularaccounts[index].creationDateTime,
      lastModifiedDateTime: this.regularaccounts[index].lastModifiedDateTime
    });
  }

  onDeleteRegularAccountConfirmClick(event) {
    this.deleteRegularAccountForm["submitted"] = true;
    if (this.deleteRegularAccountForm.valid) {
      this.deleteRegularAccountDisabled = true;
      var regularaccount: RegularAccount = this.deleteRegularAccountForm.value;

      this.regularaccountsService.DeleteAccount(regularaccount).subscribe((deleteResponse) => {
        this.deleteRegularAccountForm.reset();
        $("#btnDeleteRegularAccountCancel").trigger("click");
        this.deleteRegularAccountDisabled = false;
        this.showRegularAccountSpinner = true;

        this.regularaccountsService.GetAllAccounts().subscribe((getResponse) => {
          this.showRegularAccountSpinner = false;
          this.regularaccounts = getResponse;
        }, (error) => {
          console.log(error);
        });
      },
        (error) => {
          console.log(error);
          this.deleteRegularAccountDisabled = false;
        });
    }
    else {
      super.getFormGroupErrors(this.deleteRegularAccountForm);
    }
  }





  onViewSelectAllClick() {
    for (let propertyName of Object.keys(this.viewRegularAccountCheckBoxes)) {
      this.viewRegularAccountCheckBoxes[propertyName] = true;
    }
  }

  onViewDeselectAllClick() {
    for (let propertyName of Object.keys(this.viewRegularAccountCheckBoxes)) {
      this.viewRegularAccountCheckBoxes[propertyName] = false;
    }
  }

  onBtnSortClick() {
    console.log(this.sortBy);
    this.regularaccounts.sort((a, b) => {
      let comparison = 0;
      let value1 = ((typeof a[this.sortBy]) == 'string') ? a[this.sortBy].toUpperCase() : a[this.sortBy];
      let value2 = ((typeof b[this.sortBy]) == 'string') ? b[this.sortBy].toUpperCase() : b[this.sortBy];

      if (this.sortBy == "creationDateTime" || this.sortBy == "lastModifiedDateTime") {
        var tt = value1.split("/");
        var d1 = new Date(tt[2], tt[1], tt[0]);
        tt = value2.split("/");
        var d2 = new Date(tt[2], tt[1], tt[0]);
        if (d2 > d1) comparison = -1;
        else comparison = 1;
      }
      else {
        if (value1 < value2) {
          comparison = -1;
        }
        else if (value1 > value2) {
          comparison = 1;
        }
      }
      if (this.sortDirection == "DESC")
        comparison = comparison * -1;

      console.log(value1, value2, comparison);
      return comparison;
    });

  }
}







