import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "admin", loadChildren: () => import("./AdminModule/admin.module").then(m => m.AdminModule) },
  { path: "employee", loadChildren: () => import("./EmployeeModule/employee.module").then(m => m.EmployeeModule) },
  { path: "**", redirectTo: "/login", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
