export class CarLoan {
  id: string;
  carcustomerID: string;
  carloanID: string;
  carloanType: string;
  carloanStatus: string;
  carloanAmount: number;
  carloanDuration: number;
  carlicense: string;
  carcreationDateTime: string;
  carlastModifiedDateTime: string;

  constructor(ID: string, CustomerID: string, LoanID: string, LoanType: string, LoanStatus:string ,LoanAmount: number,LoanDuration :number, License:string, CreationDateTime: string, LastModifiedDateTime: string) {
    this.id = ID;
    this.carcustomerID = CustomerID;
    this.carloanID = LoanID;
    this.carloanType = LoanType;
    this.carloanStatus = LoanStatus;
    this.carloanAmount = LoanAmount;
    this.carloanDuration = LoanDuration;
    this.carlicense = License;
    this.carcreationDateTime = CreationDateTime;
    this.carlastModifiedDateTime = LastModifiedDateTime;
  }
}
