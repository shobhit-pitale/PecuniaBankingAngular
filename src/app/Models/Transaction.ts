export class Transaction {
  id: number;
  transactionID: string;
  creditAccountNumber: string;
  debitAccountNumber: string;
  ammount: number;
  transactionType: string;
  transactionDateTime: string;



  constructor(ID: number, TransactionID: string, CreditAccountNumber: string, DebitAccountNumber: string, Ammount: number, TransactionType: string, TransactionDateTime: string) {
    this.id = ID;
    this.transactionID = TransactionID;
    this.creditAccountNumber = CreditAccountNumber;
    this.debitAccountNumber = DebitAccountNumber;
    this.ammount = Ammount;
    this.transactionType = TransactionType;
    this.transactionDateTime = TransactionDateTime;
  }
}
