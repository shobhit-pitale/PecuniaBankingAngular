export class Employee
{
  id: number;
  employeeID: string;
  employeeName: string;
  email: string;
  password: string;
  creationDateTime: string;
  lastModifiedDateTime: string;


  constructor(ID: number, EmployeeID: string, EmployeeName: string, Email: string, Password: string, CreationDateTime: string, LastModifiedDateTime: string) {
    this.id = ID;
    this.employeeID = EmployeeID;
    this.employeeName = EmployeeName;
    this.email = Email;
    this.password = Password;
    this.creationDateTime = CreationDateTime;
    this.lastModifiedDateTime = LastModifiedDateTime;
  }
}
