import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { TransactionComponent } from './transaction/transaction.component';




const routes: Routes = [
  { path: "home", component: EmployeeHomeComponent },
  { path: "transaction", component: TransactionComponent },

  { path: "**", component: EmployeeHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

