import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DebitCard } from '../Models/debitcard';

@Injectable({
  providedIn: 'root'
})
export class DebitCardsService {
  constructor(private httpClient: HttpClient) {
  }

  AddDebitCard(debitcard: DebitCard,cardNo:number): Observable<boolean> {

    debitcard.cardIssueDate = new Date().toLocaleDateString();
    debitcard.lastModifiedDate = new Date().toLocaleDateString();
    debitcard.debitCardID = this.uuidv4();
    debitcard.cardStatus = "Active";
    debitcard.cardNumber = cardNo;
    var d = new Date();
    debitcard.expiryDate = `${d.getMonth() + 1}/${d.getFullYear()}`;
    return this.httpClient.post<boolean>(`/api/debitcards`, debitcard);
  }

  UpdateDebitCardStatus(debitcard: DebitCard): Observable<boolean> {
    debitcard.lastModifiedDate = new Date().toLocaleDateString();
    debitcard.cardStatus = "Blocked";
    return this.httpClient.put<boolean>(`/api/debitcards`, debitcard);
  }

  GetAllDebitCards(): Observable<DebitCard[]> {
    return this.httpClient.get<DebitCard[]>(`/api/debitcards`);
  }

  GetDebitCardByDebitCardID(DebitCardID: number): Observable<DebitCard> {
    return this.httpClient.get<DebitCard>(`/api/debitcards?debitcardID=${DebitCardID}`);
  }

  GetDebitCardsByAccountIDAndStatus(AccountID: string, Status: string): Observable<DebitCard[]> {
    console.log("ad");
    return this.httpClient.get<DebitCard[]>(`/api/debitcards?accountID=${AccountID}&cardStatus=${Status}`);
  }

  GetDebitCardByCardNumber(CardNumber: number): Observable<DebitCard> {
    return this.httpClient.get<DebitCard>(`/api/debitcards?cardNumber=${CardNumber}`);
  }



  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}



