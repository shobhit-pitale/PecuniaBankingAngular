import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EducationLoan } from '../Models/EducationLoan';

@Injectable({
  providedIn: 'root'
})
export class EducationLoanServices {
  constructor(private httpClient: HttpClient) {
  }

  AddEducationLoan(educationLoan: EducationLoan): Observable<boolean> {
    educationLoan.educationcreationDateTime = new Date().toLocaleDateString();
    educationLoan.educationlastModifiedDateTime = new Date().toLocaleDateString();
    educationLoan.id = this.uuidv4();
    educationLoan.educationloanStatus = "Pending";
    educationLoan.educationloanType = "Education";
    return this.httpClient.post<boolean>(`/api/educationloans`, educationLoan);
  }

  UpdateEducationLoan(educationLoan: EducationLoan): Observable<boolean> {
    educationLoan.educationlastModifiedDateTime = new Date().toLocaleDateString();
    return this.httpClient.put<boolean>(`/api/educationloans`, educationLoan);
    
  }

  DeleteEducationLoan(loanID: string, id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`/api/educationloans/${id}`);
  }

  GetAllEducationLoans(): Observable<EducationLoan[]> {
    return this.httpClient.get<EducationLoan[]>(`/api/educationloans`);
  }

  GetEducationLoanBycustomerID(LoanID: string): Observable<EducationLoan[]> {
    return this.httpClient.get<EducationLoan[]>(`/api/educationloans?educationcustomerID=${LoanID}`);
  }

  GetEducationLoanByLoanStatus(LoanStatus: string): Observable<EducationLoan[]> {
    return this.httpClient.get<EducationLoan[]>(`/api/educationloans?loanStatus=${LoanStatus}`);
  }
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
