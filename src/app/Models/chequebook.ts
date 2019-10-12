export class ChequeBook {
  id: number;
  chequeBookID: string;
  accountID: string;
  accountNo: number;
  seriesStart: number;
  numberOfLeaves: number;
  chequeBookStatus:string
  chequeBookRequestDate: string;
  lastModifiedDate: string;

  constructor(ID: number, ChequeBookID: string, AccountID: string, AccountNo: number, SeriesStart:number,NumberOfLeaves: number,ChequeBookStatus:string,ChequeBookRequestDate: string, LastModifiedDate: string ) {
    this.id = ID;
    this.chequeBookID = ChequeBookID;
    this.accountID = AccountID;
    this.accountNo = AccountNo;
    this.seriesStart = SeriesStart;
    this.numberOfLeaves = NumberOfLeaves;
    this.chequeBookStatus = ChequeBookStatus;
    this.chequeBookRequestDate = ChequeBookRequestDate;
    this.lastModifiedDate = LastModifiedDate;
  }
}
