import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Admin } from '../Models/Admin';
import { Employee } from '../Models/Employee';

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
    
    return { admins, employees };
  }
}
