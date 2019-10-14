import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChequeBook } from '../Models/chequebook';

@Injectable({
  providedIn: 'root'
})
export class ChequeBooksService {
  constructor(private httpClient: HttpClient) {
  }

  AddChequeBook(chequebook: ChequeBook): Observable<boolean> {

    chequebook.chequeBookRequestDate = new Date().toLocaleDateString();
    chequebook.lastModifiedDate = new Date().toLocaleDateString();
    chequebook.chequeBookID = this.uuidv4();
    chequebook.chequeBookStatus = 'Requested';
    return this.httpClient.post<boolean>(`/api/chequebooks`, chequebook);
  }

  UpdateChequeBook(chequebook: ChequeBook): Observable<boolean> {
    chequebook.lastModifiedDate = new Date().toLocaleDateString();
    chequebook.chequeBookStatus = 'Approved';
    return this.httpClient.put<boolean>(`/api/chequebooks`, chequebook);
  }

  GetAllChequeBooks(): Observable<ChequeBook[]> {
    return this.httpClient.get<ChequeBook[]>(`/api/chequebooks`);
  }

  GetChequeBookByChequeBookID(ChequeBookID: number): Observable<ChequeBook> {
    return this.httpClient.get<ChequeBook>(`/api/chequebooks?chequeBookID=${ChequeBookID}`);
  }

  GetChequeBooksByAccountID(AccountID: string): Observable<ChequeBook[]> {
    return this.httpClient.get<ChequeBook[]>(`/api/chequebooks?accountID=${AccountID}`);
  }

  GetChequeBookBySeriesStart(SeriesStart: number): Observable<ChequeBook> {
    return this.httpClient.get<ChequeBook>(`/api/chequebooks?seriesStart=${SeriesStart}`);
  }

  GetChequeBooksByAccountIDAndStatus(AccountID: string, Status: string): Observable<ChequeBook[]> {
    return this.httpClient.get<ChequeBook[]>(`/api/chequebooks?accountID=${AccountID}&chequeBookStatus=${Status}`);
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}



