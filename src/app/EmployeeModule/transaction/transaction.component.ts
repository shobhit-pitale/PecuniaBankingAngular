import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Models/Transaction';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/Services/transaction.service';
import { RegularAccountsService } from '../../Services/regularaccounts.service';
import { RegularAccount } from '../../Models/regularaccount';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
  
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];

  newDebitForm: FormGroup;
  newDebitDisabled: boolean = false;
  newDebitFormErrorMessages: any;

  newCreditForm: FormGroup;
  newCreditDisabled: boolean = false;
  newCreditFormErrorMessages: any;

  newTransferForm: FormGroup;
  newTransferDisabled: boolean = false;
  newTransferFormErrorMessages: any;

  account: RegularAccount[] = [];

  constructor(private transactionService: TransactionService, private regularaccountsService: RegularAccountsService) {

    this.newDebitForm = new FormGroup({
      debitAccountNumber: new FormControl(null, [Validators.required]),
      ammount: new FormControl(null, [Validators.required])

    });
    this.newCreditForm = new FormGroup({
      crditAccountNumber: new FormControl(null, [Validators.required]),
      ammount: new FormControl(null, [Validators.required])

    });
    this.newTransferForm = new FormGroup({
      debitAccountNumber: new FormControl(null, [Validators.required]),
      crditAccountNumber: new FormControl(null, [Validators.required]),
      ammount: new FormControl(null, [Validators.required])

    });
  }
  ngOnInit() { }

  onDebitFormClick() {
    this.newDebitForm.reset();
    this.newDebitForm["submitted"] = false;
  }
  onNewDebitClick() {
    this.newDebitForm["submitted"] = true;
    var debitAccount = this.newDebitForm.value;
    this.regularaccountsService.GetAccountByAccountNo(debitAccount.accountNo).subscribe(
      (getResponse) => {
        this.account = getResponse;

        if (this.account[0] != null) {


        }
      }, (error) => { }

      )
    
  }
}
