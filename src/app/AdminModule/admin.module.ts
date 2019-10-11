import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { AdminRoutingModule } from './admin-routing.module';
import { EmployeesComponent } from './employee/employee.component';




@NgModule({
  declarations: [
    AdminHomeComponent,
    EmployeesComponent,
   

    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports: [
    AdminRoutingModule,
    AdminHomeComponent,
    EmployeesComponent,
   
  
  ]
})
export class AdminModule { }
