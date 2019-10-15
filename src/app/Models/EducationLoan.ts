export class EducationLoan {
  id: string;
  educationcustomerID: string;
  educationloanID: string;
  educationloanType: string;
  educationloanStatus: string;
  educationloanAmount: number;
  educationloanDuration: number;
  educationcollateral: number;
  educationcollegeName: string
  educationcreationDateTime: string;
  educationlastModifiedDateTime: string;

  constructor(ID: string, CustomerID: string, LoanID: string, LoanType: string, LoanStatus: string, LoanAmount: number, LoanDuration: number, Collateral: number,CollegeName: string, CreationDateTime: string, LastModifiedDateTime: string) {
    this.id = ID;
    this.educationcustomerID = CustomerID;
    this.educationloanID = LoanID;
    this.educationloanType = LoanType;
    this.educationloanStatus = LoanStatus;
    this.educationloanAmount = LoanAmount;
    this.educationloanDuration = LoanDuration;
    this.educationcollateral = Collateral;
    this.educationcollegeName = CollegeName;
    this.educationcreationDateTime = CreationDateTime;
    this.educationlastModifiedDateTime = LastModifiedDateTime;
  }
}
