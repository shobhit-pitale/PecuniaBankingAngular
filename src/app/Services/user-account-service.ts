import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  currentUser: User;
  isLoggedIn: boolean;
  currentUserType: string;
  constructor(private httpClient: HttpClient) {
    this.currentUser = new User(null, null);
    this.isLoggedIn = false;
    this.currentUserType = null;
  }
  authenticate(email: string, password: string, userType: string): Observable<any>
  {
    
     if(userType == "Employee")
       return this.httpClient.get(`/api/employees?password=${password}`);
    else if (userType == "Admin")
       return this.httpClient.get(`/api/admins?password=${password}`);

  }
}
