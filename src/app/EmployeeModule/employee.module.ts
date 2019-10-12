import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CustomersComponent } from './customers/customers.component';
import { ChequeBooksComponent } from './Utilities/chequebooks/chequebooks.component';
import { DebitCardsComponent } from './Utilities/debitcards/debitcards.component';
import { RegularAccountsComponent } from './accounts/regularaccounts/regularaccounts.component';




@NgModule({
  declarations: [
    EmployeeHomeComponent,
    CustomersComponent,
    TransactionComponent,
    ChequeBooksComponent,
    DebitCardsComponent,
    RegularAccountsComponent



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
    CustomersComponent,
    TransactionComponent,
    ChequeBooksComponent,
    DebitCardsComponent,
    RegularAccountsComponent
  ]
})
export class EmployeeModule { }
