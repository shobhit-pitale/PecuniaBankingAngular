import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Admin } from '../Models/Admin';
import { Employee } from '../Models/Employee';
import { Customer } from '../Models/customer';
import { RegularAccount } from '../Models/regularaccount';
import { ChequeBook } from '../Models/chequebook';
import { DebitCard } from '../Models/debitcard';
import { CarLoan } from '../Models/CarLoans';
import { PersonalLoan } from '../Models/PersonalLoan';
import { HomeLoan } from '../Models/HomeLoan';
import { EducationLoan } from '../Models/EducationLoan';

@Injectable({
  providedIn: 'root'
})
export class PecuniaDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    let admins = [
      new Admin(1, '101', 'Admin', 'admin@capgemini.com', 'manager')
    ];
    let employees = [
      new Employee(1, "401476EE-0A3B-482E-BD5B-B94A32355959", "Scott", "scott@capgemini.com", "Scott123#", "10/3/2019", "10/4/2019"),
      new Employee(2, "C628855C-FE7A-4D94-A1BB-167157D3F4EA", "Smith", "smith@capgemini.com", "Smith123#", "9/6/2019", "5/7/2019"),
      new Employee(3, "6D68849C-8FA8-4049-A111-B431C76C6548", "Arun", "arun@capgemini.com", "Arun123#", "1/5/2017", "15/11/2018"),
      new Employee(4, "53E8748F-61D6-494B-BF72-E18B27511EFA", "Jones",  "jones@capgemini.com", "Jones123#", "2/7/2019", "12/1/2019")
    ];
    let customers = [
      new Customer(1, "401476EE-0A3B-482E-BD5B-B94A32355959", 100001, "Scott", "9876543210", "scott@capgemini.com", "SADHGHGHJKSHD", "825736095581", "10/2/1992", "Male", "ADKPC1022R", "10/3/2019", "10/4/2019"),
      new Customer(2, "C628855C-FE7A-4D94-A1BB-167157D3F4EA", 100002, "Smith", "9988776655", "smith@capgemini.com", "RDSYRWYUEETRU", "823536098851", "23/6/1993", "Male", "RDHKO1099T", "9/6/2019", "5/7/2019"),
      new Customer(3, "6D68849C-8FA8-4049-A111-B431C76C6548", 100003, "Aruni", "7781994834", "aruni@capgemini.com", "SFDYWATEDWDSDJK", "345678904321", "12/7/1997", "Female", "RFTCY4545R", "1/5/2017", "15/11/2018"),
      new Customer(4, "53E8748F-61D6-494B-BF72-E18B27511EFA", 100004, "Jones", "6989493491", "jones@capgemini.com", "FDSGHFGEUFKU", "123456789045", "6/9/1995", "Male", "DRTYU7777N", "2/1/2019", "12/1/2019")
    ];
    let regularaccounts = [
      new RegularAccount(1, "10c8cc37-5717-4333-8d02-ddeb47dc34e3", "ceb68714-3b7e-4a3e-8358-5609f5198b52", 1000000001, 0.0, "Current", "Bengaluru", "Active", 500.0, 3.5, "07/09/2019", "28/09/2019"),

      new RegularAccount(2, "efa59230-c787-4ab3-81ba-eb27d6ca31f7", "ceb68714-3b7e-4a3e-8358-5509f5198b52", 1000000002, 0.0, "current", "Chennai", "Active", 500.0, 3.5, "12/09/2019", "27/09/2019"),

      new RegularAccount(3, "9b989ff9-9be5-41d2-a074-13d6ade7935d", "7313928b-dce3-42f7-b299-0ec153306205", 1000000003, 0.0, "Savings", "Delhi", "Active", 0.0, 3.5, "02/10/2019", "08/10/2019"),

      new RegularAccount(4, "586972bb-5635-491d-9e47-a744519a5d10", "a17e947a-d41e-4148-9397-6498cf1d20e4", 1000000004, 0.0, "Savings", "Chennai", "Active", 0.0, 3.5, "06/10/2019", "07/10/2019"),

      new RegularAccount(5, "186b0df7-4a58-4e45-80c7-ac9ccd3fc08c", "1c65918e-ea22-4710-a7a6-8db97bd87610", 1000000005, 0.0, "savings", "Mumbai", "Active", 0.0, 3.5, "08/10/2019", "09/10/2019")
    ];
    let chequebooks = [

      new ChequeBook(1, "f9698031-93ef-41f7-9493-aa4c3e55fded", "10c8cc37-5717-4333-8d02-ddeb47dc34e3", 1000000001, 200000.0, 20, "Approved", "05/10/2019", "09/10/2019"),
      new ChequeBook(2, "f9678031-93ef-41f7-9493-aa4c3e55fded", "10c8cc37-5717-4333-8d02-ddeb47dc34e3", 1000000001, 300000.0, 30, "Approved", "05/10/2019", "09/10/2019"),
      new ChequeBook(3, "f9608031-93ef-41f7-9493-aa4c3e55fded", "10c8cc37-5717-4333-8d02-ddeb47dc34e3", 1000000001, 400000.0, 40, "Approved", "05/10/2019", "09/10/2019")
    ];
    let debitcards = [

      new DebitCard(1, "f0698031-93ef-41f7-9493-aa4c3e55fded", "10c8cc37-5717-4333-8d02-ddeb47dc34e3", "tarunsree", 100010001000, "09/2019", "Rupay", "Blocked", "05/10/2019", "09/10/2019"),
      new DebitCard(2, "f9678037-93ef-41f7-9493-aa4c3e55fded", "10c8cc37-5717-4333-8d02-ddeb47dc34e3", "akhil", 100010001001, "10/2019", "Visa", "Blocked", "05/10/2019", "09/10/2019")

    ];
    let carloans =
      [
        new CarLoan("AXAX", "100001", "CL001", "Car", "Pending", 100000, 5, "AB1220991234567", "10/3/2019", "10/4/2019"),
        new CarLoan("AXEX", "100002", "CL002", "Car", "Pending", 200000, 10, "CG0720991234567", "9/6/2019", "5/7/2019"),
        new CarLoan("AXDX", "100003", "CL003", "Car", "Pending", 3000000, 4, "MH0120991234567", "1/5/2017", "15/11/2018"),
        new CarLoan("AXCX", "100004", "CL004", "Car", "Pending", 4000000, 5, "DL0120991234567", "2/7/2019", "12/1/2019")
      ];

    let homeloans =
      [
        new HomeLoan("AXAN", "100001", "HL001", "Home", "Pending", 500000, 5, 1000000, "10/3/2019", "10/4/2019"),
        new HomeLoan("AXAM", "100005", "HL002", "Home", "Pending", 600000, 10, 3000000, "9/6/2019", "5/7/2019"),
        new HomeLoan("AXAC", "100006", "HL003", "Home", "Pending", 7000000, 4, 5000000, "1/5/2017", "15/11/2018"),
        new HomeLoan("AXAV", "100004", "HL004", "Home", "Pending", 8000000, 5, 7000000, "2/7/2019", "12/1/2019")
      ];

    let personalloans =
      [
        new PersonalLoan("AXAL", "100001", "PL001", "Personal", "Medical", "Pending", 900000, 5, 9000000, "10/3/2019", "10/4/2019"),
        new PersonalLoan("AXAO", "100007", "PL002", "Personal", "Medical", "Pending", 1000000, 10, 11000000, "9/6/2019", "5/7/2019"),
        new PersonalLoan("AXAJ", "100008", "PL003", "Personal", "Medical", "Pending", 11000000, 4, 13000000, "1/5/2017", "15/11/2018"),
        new PersonalLoan("AXAU", "100004", "PL004", "Personal", "Medical", "Pending", 12000000, 5, 15000000, "2/7/2019", "12/1/2019")
      ];
    let educationloans =
      [
        new EducationLoan("AXAS", "100001", "EL001", "Education", "Pending", 1300000, 5, 17000000, "IIT B", "10/3/2019", "10/4/2019"),
        new EducationLoan("AXAW", "100009", "EL002", "Education", "Pending", 1400000, 10, 19000000, "NIT RR", "9/6/2019", "5/7/2019"),
        new EducationLoan("AXAD", "100010", "EL003", "Education", "Pending", 15000000, 4, 21000000, "MIT", "1/5/2017", "15/11/2018"),
        new EducationLoan("AXAE", "100004", "EL004", "Education", "Pending", 16000000, 5, 23000000, "Stanford", "2/7/2019", "12/1/2019")
      ];
    
    return { admins, employees, customers, regularaccounts, chequebooks, debitcards,carloans,homeloans,personalloans,educationloans };
  }
}
