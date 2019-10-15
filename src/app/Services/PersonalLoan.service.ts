import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonalLoan } from '../Models/PersonalLoan';

@Injectable({
  providedIn: 'root'
})
export class PersonalLoanServices {
  constructor(private httpClient: HttpClient) {
  }

  AddPersonalLoan(personalLoan: PersonalLoan): Observable<boolean> {
    personalLoan.personalcreationDateTime = new Date().toLocaleDateString();
    personalLoan.personallastModifiedDateTime = new Date().toLocaleDateString();
    personalLoan.personalloanStatus = "Pending";
    personalLoan.personalloanType = "Personal";
    return this.httpClient.post<boolean>(`/api/personalloans`, personalLoan);
  }

  UpdatePersonalLoan(personalLoan: PersonalLoan ): Observable<boolean> {
    personalLoan.personallastModifiedDateTime = new Date().toLocaleDateString();
    return this.httpClient.put<boolean>(`/api/personalloans`, personalLoan);
  }

  DeletePersonalLoan(loanID: string, id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`/api/personalloans/${id}`);
  }

  GetAllPersonalLoans(): Observable<PersonalLoan[]> {
    return this.httpClient.get<PersonalLoan[]>(`/api/personalloans`);
  }

  GetPersonalLoanBycustomerID(LoanID: string): Observable<PersonalLoan[]> {
    return this.httpClient.get<PersonalLoan[]>(`/api/personalloans?personalcustomerID=${LoanID}`);
  }

  GetPersonalLoanByLoanStatus(LoanStatus: string): Observable<PersonalLoan[]> {
    return this.httpClient.get<PersonalLoan[]>(`/api/personalloans?loanStatus=${LoanStatus}`);
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
