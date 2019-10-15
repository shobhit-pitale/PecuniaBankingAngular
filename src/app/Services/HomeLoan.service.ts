import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeLoan } from '../Models/HomeLoan';

@Injectable({
  providedIn: 'root'
})
export class HomeLoanServices {
  constructor(private httpClient: HttpClient) {
  }

  AddHomeLoan(homeLoan: HomeLoan): Observable<boolean> {
    homeLoan.homecreationDateTime = new Date().toLocaleDateString();
    homeLoan.homelastModifiedDateTime = new Date().toLocaleDateString();
    homeLoan.id = this.uuidv4();
    homeLoan.homeloanStatus = "Pending";
    homeLoan.homeloanType = "Home"
    return this.httpClient.post<boolean>(`/api/homeloans`, homeLoan);
  }

  UpdateHomeLoan(homeLoan: HomeLoan): Observable<boolean> {
    homeLoan.homelastModifiedDateTime = new Date().toLocaleDateString();
    return this.httpClient.put<boolean>(`/api/homeloans`, homeLoan);
  }

  DeleteHomeLoan(loanID: string, id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`/api/homeloans/${id}`);
  }

  GetAllHomeLoans(): Observable<HomeLoan[]> {
    return this.httpClient.get<HomeLoan[]>(`/api/homeloans`);
  }

  GetHomeLoanBycustomerID(LoanID: string): Observable<HomeLoan[]> {
    return this.httpClient.get<HomeLoan[]>(`/api/homeloans?homecustomerID=${LoanID}`);
  }

  GetHomeLoanByLoanStatus(LoanStatus: string): Observable<HomeLoan[]> {
    return this.httpClient.get<HomeLoan[]>(`/api/homeloans?loanStatus=${LoanStatus}`);
  }
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
