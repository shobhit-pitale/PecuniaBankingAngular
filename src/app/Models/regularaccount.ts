export class RegularAccount {

  id: number;

  accountID: string;

  customerID: string;

  accountNo: number;

  currentBalance: number;

  accountType: string;

  branch: string;

  status: string;

  minimumBalance: number;

  interestRate: number;

  creationDateTime: string;

  lastModifiedDateTime: string;

  constructor(ID: number, AccountID: string, CustomerID: string, AccountNo: number, CurrentBalance: number, AccountType: string, Branch: string, Status: string, MinimumBalance: number, InterestRate: number, CreationDateTime: string, LastModifiedDateTime: string) {

    this.id = ID;

    this.accountID = AccountID;

    this.customerID = CustomerID;

    this.accountNo = AccountNo;

    this.currentBalance = CurrentBalance;

    this.accountType = AccountType;

    this.branch = Branch

    this.status = Status;

    this.minimumBalance = MinimumBalance;

    this.interestRate = InterestRate;

    this.creationDateTime = CreationDateTime;

    this.lastModifiedDateTime = LastModifiedDateTime;

  }

}
