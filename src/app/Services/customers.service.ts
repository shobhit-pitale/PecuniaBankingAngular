//Prepared by Asmita Chandrakar
//Customer service class

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService
{
  constructor(private httpClient: HttpClient)
  {
  }
  //Function call to Add customers
  AddCustomer(customer: Customer, newcustomernumber: number): Observable<boolean>
  {
    customer.creationDateTime = new Date().toLocaleDateString();
    customer.lastModifiedDateTime = new Date().toLocaleDateString();
    customer.customerID = this.uuidv4();
    customer.customerNumber = newcustomernumber;// this.customernumbergeneration();
    return this.httpClient.post<boolean>(`/api/customers`, customer);
  }
  //Function call to update Customers
  UpdateCustomer(customer: Customer): Observable<boolean>
  {
    customer.lastModifiedDateTime = new Date().toLocaleDateString();
    return this.httpClient.put<boolean>(`/api/customers`, customer);
  }
  //Function call to get all customers
  GetAllCustomers(): Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(`/api/customers`);
  }
  //Function call to get customer by customer ID
  GetCustomerByCustomerID(CustomerID: string): Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(`/api/customers?customerID=${CustomerID}`);
  }
  //Function call to get customer by customerNumber
  GetCustomerByCustomerNumber(CustomerNumber: number): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`/api/customers?customerNumber=${CustomerNumber}`);
  }
  //Function call to get customer by mobile number
  GetCustomerByCustomerMobile(CustomerMobile: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`/api/customers?customerMobile=${CustomerMobile}`);
  }
  GetCustomerByAadharNumber(AadharNumber: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`/api/customers?aadharNumber=${AadharNumber}`);
  }
  GetCustomersByCustomerName(CustomerName: string): Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(`/api/customers?customerName=${CustomerName}`);
  }

  GetCustomerByEmail(Email: string): Observable<Customer>
  {
    return this.httpClient.get<Customer>(`/api/customers?email=${Email}`);
  }

  GetCustomerByPANNumber(PANNumber: string): Observable<Customer>
  {
    return this.httpClient.get<Customer>(`/api/customers?panNumber=${PANNumber}`);
  }
  //Function for generating Customer ID
  uuidv4()
  {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c)
    {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  //customernumbergeneration()
  //{
  //  var i = 100004;
  //  i++;
  //  return i;
  //}
  
}



