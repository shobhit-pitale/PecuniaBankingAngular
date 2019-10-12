export class DebitCard {
  id: number;
  debitCardID: string;
  accountID: string
  customerNameAsPerCard: string;
  cardNumber: number;
  expiryDate: string;
  cardType: string;
  cardStatus: string;
  cardIssueDate: string;
  lastModifiedDate: string;

  constructor(ID: number,DebitCardID: string, AccountID: string,  CustomerNameAsPerCard: string, CardNumber: number, ExpiryDate: string, CardType: string, CardStatus: string, CardIssueDate: string, LastModifiedDate: string) {
    this.id = ID;
    this.debitCardID = DebitCardID;
    this.accountID = AccountID;
    this.customerNameAsPerCard = CustomerNameAsPerCard;
    this.cardNumber = CardNumber;
    this.expiryDate = ExpiryDate;
    this.cardType = CardType;
    this.cardStatus = CardStatus;
    this.cardIssueDate = CardIssueDate;
    this.lastModifiedDate = LastModifiedDate;
  }
}
