import { Component } from '@angular/core';
import { Transaction } from 'src/app/Models/Transaction';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/Services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
  
})
export class TransactionComponent {
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

  constructor(private transactionService: TransactionService) {

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
}
