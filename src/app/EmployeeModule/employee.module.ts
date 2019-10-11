import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { TransactionComponent } from './transaction/transaction.component';




@NgModule({
  declarations: [
    EmployeeHomeComponent,
    TransactionComponent



  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
   
  ],
  exports: [

    EmployeeRoutingModule,
    EmployeeHomeComponent,
    TransactionComponent
  ]
})
export class EmployeeModule { }
