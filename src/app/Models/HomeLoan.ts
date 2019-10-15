export class HomeLoan {
  id: string;
  homecustomerID: string;
  homeloanID: string;
  homeloanType: string;
  homeloanStatus: string;
  homeloanAmount: number;
  homeloanDuration: number;
  homecollateral: number;
  homecreationDateTime: string;
  homelastModifiedDateTime: string;

  constructor(ID: string, CustomerID: string, LoanID: string, LoanType: string, LoanStatus: string, LoanAmount: number, LoanDuration: number, Collateral: number, CreationDateTime: string, LastModifiedDateTime: string) {
    this.id = ID;
    this.homecustomerID = CustomerID;
    this.homeloanID = LoanID;
    this.homeloanType = LoanType;
    this.homeloanStatus = LoanStatus;
    this.homeloanAmount = LoanAmount;
    this.homeloanDuration = LoanDuration;
    this.homecollateral = Collateral;
    this.homecreationDateTime = CreationDateTime;
    this.homelastModifiedDateTime = LastModifiedDateTime;
  }
}
