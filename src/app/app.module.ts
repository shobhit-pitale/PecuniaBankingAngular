import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminModule } from './AdminModule/admin.module';
//import { environment } from 'src/environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PecuniaDataService } from './FakeBackend/data-services';
import { EmployeeModule } from './EmployeeModule/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(PecuniaDataService, { delay: 1000 }),
    AdminModule,
    EmployeeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
