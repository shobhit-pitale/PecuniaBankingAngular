import { Component } from '@angular/core';
import { Transaction } from 'src/app/Models/Transaction';
import { FormGroup } from '@angular/forms';

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
}
