import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private httpClient: HttpClient) {
  }

  AddEmployee(employee: Employee): Observable<boolean> {
    employee.creationDateTime = new Date().toLocaleDateString();
    employee.lastModifiedDateTime = new Date().toLocaleDateString();
    employee.employeeID = this.uuidv4();
    return this.httpClient.post<boolean>(`/api/employees`, employee);
  }

  UpdateEmployee(employee: Employee): Observable<boolean> {
    employee.lastModifiedDateTime = new Date().toLocaleDateString();
    return this.httpClient.put<boolean>(`/api/employees`, employee);
  }

  DeleteEmployee(employeeID: string, id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`/api/employees/${id}`);
  }

  GetAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`/api/employees`);
  }

  GetEmployeeByEmployeeID(EmployeeID: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`/api/employees?employeeID=${EmployeeID}`);
  }

  GetEmployeeByEmployeeName(EmployeeName: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`/api/employees?employeeName=${EmployeeName}`);
  }

  GetEmployeeByEmail(Email: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`/api/employees?email=${Email}`);
  }

  GetEmployeeByEmailAndPassword(Email: string, Password: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`/api/employees?email=${Email}&password=${Password}`);
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}



