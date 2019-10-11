import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserAccountService } from 'src/app/Services/user-account-service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  loginForm: FormGroup;
  constructor(private userAccountService: UserAccountService, private router: Router)
  {
    this.loginForm = new FormGroup(
      {
        email: new FormControl(null),
        password: new FormControl(null),
        userType: new FormControl(null)
      }); 
  }
  ngOnInit()
  {

  }
  onLoginClick()
  {
    this.userAccountService.authenticate(this.loginForm.value.email, this.loginForm.value.password, this.loginForm.value.userType).subscribe((response) =>
    {
      if (response != null && response.length > 0 && this.loginForm.value.userType=="Employee")
      {
        this.userAccountService.currentUser = new User(this.loginForm.value.email, response[0].employeeName);
        this.userAccountService.currentUserType = "Employee";
        this.userAccountService.isLoggedIn = true;
        this.router.navigate(["/employee", "home"]);
      }
      else if (response != null && response.length > 0 && this.loginForm.value.userType == "Admin") {
        this.userAccountService.currentUser = new User(this.loginForm.value.email, response[0].adminName);
        this.userAccountService.currentUserType = "Admin";
        this.userAccountService.isLoggedIn = true;
        this.router.navigate(["/admin", "home"]);
      }
    },

      (error) => {
        console.log(error);
      });

  }
}
