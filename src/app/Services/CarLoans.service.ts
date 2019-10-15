import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarLoan } from '../Models/CarLoans';

@Injectable({
  providedIn: 'root'
})
export class CarLoanServices {
  constructor(private httpClient: HttpClient) {
  }

  AddCarLoan(carLoan: CarLoan): Observable<boolean> {
     
    carLoan.carcreationDateTime = new Date().toLocaleDateString();
    carLoan.carlastModifiedDateTime = new Date().toLocaleDateString();
    carLoan.id = this.uuidv4();
    carLoan.carloanStatus = "Pending";
    carLoan.carloanType = "Car";
    return this.httpClient.post<boolean>(`/api/carloans`, carLoan);
  }

  UpdateCarLoan(carLoan: CarLoan): Observable<boolean> {
    carLoan.carlastModifiedDateTime = new Date().toLocaleDateString();
    return this.httpClient.put<boolean>(`/api/carloans`, carLoan);
  }

  DeleteCarLoan(loanID: string, id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`/api/carloans/${id}`);
  }

  GetAllCarLoans(): Observable<CarLoan[]> {
    return this.httpClient.get<CarLoan[]>(`/api/carloans`);
  }

  GetCarLoanBycustomerID(customerID: string): Observable<CarLoan[]> {
    return this.httpClient.get<CarLoan[]>(`/api/carloans?carcustomerID=${customerID}`);
  }

  GetCarLoanByLoanStatus(LoanStatus: string): Observable<CarLoan[]> {
    return this.httpClient.get<CarLoan[]>(`/api/carloans?loanStatus=${LoanStatus}`);
  }
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
