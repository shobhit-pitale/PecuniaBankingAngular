import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmployeesComponent } from './employee/employee.component';




const routes: Routes = [
  { path: "home", component: AdminHomeComponent },
  { path: "employees", component: EmployeesComponent },
  
  { path: "**", redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

