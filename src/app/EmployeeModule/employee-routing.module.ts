import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CustomersComponent } from './customers/customers.component';
import { DebitCardsComponent } from './Utilities/debitcards/debitcards.component';
import { ChequeBooksComponent } from './Utilities/chequebooks/chequebooks.component';
import { RegularAccountsComponent } from './accounts/regularaccounts/regularaccounts.component';
import { CarLoansComponent } from './CarLoans/CarLoans.component';




const routes: Routes = [
  { path: "home", component: EmployeeHomeComponent },
  { path: "customer", component: CustomersComponent },
  { path: "transaction", component: TransactionComponent },
  { path: "chequebooks", component: ChequeBooksComponent },
  { path: "debitcards", component: DebitCardsComponent },
  { path: "regularaccounts", component: RegularAccountsComponent },
  { path: "carloans", component: CarLoansComponent },

  { path: "**", component: EmployeeHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

