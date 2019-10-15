export class PersonalLoan {
  id: string;
  personalcustomerID: string;
  personalloanID: string;
  personalloanType: string;
  personalloanStatus: string;
  personalloanAmount: number;
  personalloanDuration: number;
  personalpurpose: string;
  personalcollateral: number;
  personalcreationDateTime: string;
  personallastModifiedDateTime: string;

  constructor(ID: string, CustomerID: string, LoanID: string, LoanType: string,Purpose: string, LoanStatus: string, LoanAmount: number, LoanDuration: number, Collateral: number, CreationDateTime: string, LastModifiedDateTime: string) {
    this.id = ID;
    this.personalcustomerID = CustomerID;
    this.personalloanID = LoanID;
    this.personalloanType = LoanType;
    this.personalloanStatus = LoanStatus;
    this.personalloanAmount = LoanAmount;
    this.personalloanDuration = LoanDuration;
    this.personalcollateral = Collateral;
    this.personalcreationDateTime = CreationDateTime;
    this.personallastModifiedDateTime = LastModifiedDateTime;
    this.personalpurpose = Purpose;
  }
}
