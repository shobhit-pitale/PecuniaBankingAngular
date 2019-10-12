import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RegularAccount } from '../Models/regularaccount';

@Injectable({

  providedIn: 'root'

})

export class RegularAccountsService {

  constructor(private httpClient: HttpClient) {

  }

  CreateAccount(regularaccount: RegularAccount, newAccountNo: number): Observable<boolean> {
    regularaccount.creationDateTime = new Date().toLocaleDateString();
    regularaccount.lastModifiedDateTime = new Date().toLocaleDateString();
    regularaccount.status = "Active";
    regularaccount.accountID = this.uuidv4();
    regularaccount.customerID = this.c_uuidv4();
    regularaccount.accountNo = newAccountNo;
    regularaccount.currentBalance = 0.0;
    return this.httpClient.post<boolean>(`/api/regularaccounts`, regularaccount);
  }

  UpdateAccount(regularaccount: RegularAccount): Observable<boolean> {

    regularaccount.lastModifiedDateTime = new Date().toLocaleDateString();

    return this.httpClient.put<boolean>(`/api/regularaccounts`, regularaccount);

  }

  DeleteAccount(regularaccount: RegularAccount): Observable<boolean> {
    regularaccount.lastModifiedDateTime = new Date().toLocaleDateString();
    regularaccount.status = "Closed";


    return this.httpClient.put<boolean>(`/api/regularaccounts`, regularaccount);
  }

  GetAccountsByType(AccountType: string): Observable<RegularAccount[]> {

    return this.httpClient.get<RegularAccount[]>(`/api/regularaccounts?accountType=${AccountType}`);

  }

  GetAllAccounts(): Observable<RegularAccount[]> {

    return this.httpClient.get<RegularAccount[]>(`/api/regularaccounts`);

  }

  GetAccountByAccountID(AccountID: string): Observable<RegularAccount> {

    

  return this.httpClient.get<RegularAccount>(`/api/regularaccounts?accountID=${AccountID}`);
 
  }

  GetAccountByAccountNo(AccountNo: number): Observable<RegularAccount[]> {

    console.log("Coming in function");
  
    return this.httpClient.get<RegularAccount[]>(`/api/regularaccounts?accountNo=${AccountNo}`);
  
  
  }

  GetAccountBycustomerID(CustomerID: string): Observable<RegularAccount> {

    return this.httpClient.get<RegularAccount>(`/api/regularaccounts?customerID=${CustomerID}`);

  }

  uuidv4() {

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {

      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);

      return v.toString(16);

    });   
  }

  c_uuidv4() {

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {

      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);

      return v.toString(16);

    });
  }

}
