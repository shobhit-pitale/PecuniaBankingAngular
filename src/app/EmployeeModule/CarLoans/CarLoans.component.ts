
import { Component, OnInit } from '@angular/core';
import { CarLoanServices } from '../../Services/CarLoans.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarLoan } from '../../Models/CarLoans';
import { Customer } from '../../Models/Customer';
import { HomeLoanServices } from '../../Services/HomeLoan.service';
import { HomeLoan } from '../../Models/HomeLoan';
import { EducationLoan } from '../../Models/EducationLoan';
import { CustomersService } from '../../Services/customers.service';
import { EducationLoanServices } from '../../Services/EducationLoan.services';
import { PersonalLoanServices } from '../../Services/PersonalLoan.service';
import { PersonalLoan } from '../../Models/PersonalLoan';
     
@Component({
  selector: 'app-Loans-home',
  templateUrl: './CarLoans.component.html',
  styleUrls: ['./CarLoans.component.scss']
})
export class CarLoansComponent implements OnInit {
  
  customers: Customer[] = [];
  carloans: CarLoan[] = [];
  homeloans: HomeLoan[] = [];
  educationloans: EducationLoan[] = [];
  personalloans: PersonalLoan[] = [];
  carloanscustomer: CarLoan[] = [];
  homeloanscustomer: HomeLoan[] = [];
  educationloanscustomer: EducationLoan[] = [];
  personalloanscustomer: PersonalLoan[] = [];

  showCarLoanSpinner: boolean = false;
  ApplyLoanClick: boolean = false;
  ApplyCarLoanClick: boolean = false;
  ApplyHomeLoanClick: boolean = false;
  ApplyEducationLoanClick: boolean = false;
  ApplyPersonalLoanClick: boolean = false;
  YourLoanClick: boolean = false;
  LoanListClick: boolean = false;
  SubmitNumber: boolean = false;
  SubmitEditNumber: boolean = false;
  SubmitEducationNumber: boolean = false;
  SubmitEducationEditNumber: boolean = false;
  CarLoanList: boolean = true;
  HomeLoanList: boolean = true;
  EducationLoanList: boolean = true;
  PersonalLoanList: boolean = true;

  newCarLoan: FormGroup;
  newCarLoanEnable: boolean = false;
  newCarLoanErrorMessages: any;

  newCustomerform: FormGroup;
  newCustomerformEnable: boolean = false;
  newCustomerformMessages: any;


  newCarLoanForm: FormGroup;
  newCarLoanFormEnable: boolean = false;
  newCarLoanFormErrorMessages: any;

  newHomeLoanForm: FormGroup;
  newHomeLoanFormEnable: boolean = false;
  newHomeLoanFormErrorMessages: any;

  newEducationLoanForm: FormGroup;
  newEducationLoanFormEnable: boolean = false;
  newEducationLoanFormErrorMessages: any;

  newPersonalLoanForm: FormGroup;
  newPersonalLoanFormEnable: boolean = false;
  newPersonalLoanFormErrorMessages: any;

 
  constructor(private customerservices: CustomersService, private carloanservices: CarLoanServices, private homeloanservices: HomeLoanServices, private educationloanservices: EducationLoanServices, private personalloanservices: PersonalLoanServices) {
    this.newCarLoan = new FormGroup({
      customerNumber: new FormControl(null, [Validators.required])
      
    })

    this.newCustomerform = new FormGroup({
      customerID: new FormControl(null, [Validators.required])

    })

    this.newCarLoanForm = new FormGroup({
      carloanID: new FormControl(null, [Validators.required]),
      carcustomerID: new FormControl(null, [Validators.required]),
      carloanAmount: new FormControl(null, [Validators.required]),
      carlicense: new FormControl(null, [Validators.required]),
      carloanDuration: new FormControl(null, [Validators.required]),
     
     
    })

    this.newHomeLoanForm = new FormGroup({
      homeloanID: new FormControl(null, [Validators.required]),
      homecustomerID: new FormControl(null, [Validators.required]),
      homeloanAmount: new FormControl(null, [Validators.required]),
      homecollateral: new FormControl(null, [Validators.required]),
      homeloanDuration: new FormControl(null, [Validators.required]),
      

    })

    this.newEducationLoanForm = new FormGroup({
      educationloanID: new FormControl(null, [Validators.required]),
      educationcustomerID: new FormControl(null, [Validators.required]),
      educationloanAmount: new FormControl(null, [Validators.required]),
      educationcollateral: new FormControl(null, [Validators.required]),
      educationloanDuration: new FormControl(null, [Validators.required]),
      

    })

    this.newPersonalLoanForm = new FormGroup({
      personalloanID: new FormControl(null, [Validators.required]),
      personalcustomerID: new FormControl(null, [Validators.required]),
      personalloanAmount: new FormControl(null, [Validators.required]),
      personalcollateral: new FormControl(null, [Validators.required]),
      personalloanDuration: new FormControl(null, [Validators.required]),
      

    })

    this.newCarLoanErrorMessages = {
      customerNumber: {
        required: "Supplier Name can't be blank"
      }
    };

  }
  ngOnInit() {
    this.carloanservices.GetAllCarLoans().subscribe((response) => {
      this.carloans = response;

    }, (error) => {
      console.log(error);
    })
    this.homeloanservices.GetAllHomeLoans().subscribe((response) => {
      this.homeloans = response;

    }, (error) => {
      console.log(error);
      })
    this.educationloanservices.GetAllEducationLoans().subscribe((response) => {
      this.educationloans = response;

    }, (error) => {
      console.log(error);
      })
    this.personalloanservices.GetAllPersonalLoans().subscribe((response) => {
      this.personalloans = response;

    }, (error) => {
      console.log(error);
      })
    this.customerservices.GetAllCustomers().subscribe((response) => {
      this.customers = response;

    }, (error) => {
      console.log(error);
    })

  }
  onApplyforLoanClick() {
    this.ApplyLoanClick = true;
    this.ApplyCarLoanClick = false;
    this.ApplyHomeLoanClick = false;
    this.ApplyEducationLoanClick = false;
    this.ApplyPersonalLoanClick = false;
    this.YourLoanClick = false;
    this.LoanListClick = false;
    this.SubmitNumber = false;
    
  }
  onApplyCarLoanClick() {
    this.ApplyLoanClick = true;
    this.ApplyCarLoanClick = true;
    this.ApplyHomeLoanClick = false;
    this.ApplyEducationLoanClick = false;
    this.ApplyPersonalLoanClick = false;
    this.YourLoanClick = false;
    this.SubmitNumber = true;
    
  }  
  onApplyHomeLoanClick() {
    this.ApplyLoanClick = true;
    this.ApplyCarLoanClick = false;
    this.ApplyHomeLoanClick = true;
    this.ApplyEducationLoanClick = false;
    this.ApplyPersonalLoanClick = false;
    this.YourLoanClick = false;
    this.SubmitNumber = true;
    }

  onApplyEducationLoanClick() {
    this.ApplyLoanClick = true;
    this.ApplyCarLoanClick = false;
    this.ApplyHomeLoanClick = false;
    this.ApplyEducationLoanClick = true;
    this.ApplyPersonalLoanClick = false;
    this.YourLoanClick = false;
    this.SubmitNumber = true;
    }

  onApplyPersonalLoanClick() {
    this.ApplyLoanClick = true;
    this.ApplyCarLoanClick = false;
    this.ApplyHomeLoanClick = false;
    this.ApplyEducationLoanClick = false;
    this.ApplyPersonalLoanClick = true;
    this.YourLoanClick = false;
    this.SubmitNumber = true;
     }
  onListofLoanClick() {
    this.ApplyLoanClick = false;
    this.YourLoanClick = false;
    this.LoanListClick = true;
    this.CarLoanList = true;
    this.HomeLoanList = true;
    this.EducationLoanList = true;
    this.PersonalLoanList = true;

  }
  onListofCarLoanClick() {
    this.CarLoanList = true;
    this.HomeLoanList = false;
    this.EducationLoanList = false;
    this.PersonalLoanList = false;
  }
  onListofHomeLoanClick() {
    this.CarLoanList = false;
    this.HomeLoanList = true;
    this.EducationLoanList = false;
    this.PersonalLoanList = false;
  }
  onListofEducationLoanClick() {
    this.CarLoanList = false;
    this.HomeLoanList = false;
    this.EducationLoanList = true;
    this.PersonalLoanList = false;
  }
  onListofPersonalLoanClick() {
    this.CarLoanList = false;
    this.HomeLoanList = false;
    this.EducationLoanList = false;
    this.PersonalLoanList = true;
  }

  onYourLoanClick()
  {
    this.ApplyLoanClick = false;
    this.ApplyCarLoanClick = false;
    this.ApplyHomeLoanClick = false;
    this.ApplyEducationLoanClick = false;
    this.ApplyPersonalLoanClick = false;
    this.YourLoanClick = true;
    this.SubmitNumber = false;
    this.SubmitEditNumber = false;
    this.SubmitEducationNumber = false;
    this.SubmitEducationEditNumber = false;
    
  }

  
  onSubmitNumberClick() {
    var cust:number = this.newCarLoan.value.customerNumber;
    console.log(cust);
    this.customerservices.GetCustomerByCustomerNumber(cust).subscribe((response) => {
      
      console.log(response);
      this.customers = response;
      //this.customer.customername
      //console.log(this.customers[0].customerName + "=============");
      if (this.customers)
      {
        this.ApplyLoanClick = true;
        this.ApplyHomeLoanClick = false;
        this.ApplyEducationLoanClick = false;
        this.ApplyPersonalLoanClick = false;
        this.YourLoanClick = false;
        this.LoanListClick = false;
        this.ApplyCarLoanClick = false;
        this.SubmitNumber = true;
        this.SubmitEditNumber = false;
        this.SubmitEducationNumber = false;
        this.SubmitEducationEditNumber = false;
        
      }
    }, (error) => {
          console.log(error);
        });
  }

  
  onSubmitLoanClick()
  {
    

    var carloan: CarLoan = this.newCarLoanForm.value;
    this.carloanservices.AddCarLoan(carloan).subscribe((addResponse) => {
      console.log(carloan
      )
      console.log(12323);
      this.carloanservices.GetAllCarLoans().subscribe((getResponse) => {

        this.carloans = getResponse;
      }, (error) => {
          console.log(error);
        });
        
        //this.customer.customername
      
        if (this.carloans) {
          this.ApplyLoanClick = false;
          this.ApplyHomeLoanClick = false;
          this.ApplyEducationLoanClick = false;
          this.ApplyPersonalLoanClick = false;
          this.YourLoanClick = false;
          this.LoanListClick = false;
          this.ApplyCarLoanClick = false;
          this.SubmitNumber = false;
          this.SubmitEditNumber = false;
          this.SubmitEducationNumber = false;
          this.SubmitEducationEditNumber = false;
          console.log(12323);
        }
      }, (error) => {
        console.log(error);
      });
    
  }

  onSubmitHomeLoanClick() {


    var homeloan: HomeLoan = this.newHomeLoanForm.value;
    this.homeloanservices.AddHomeLoan(homeloan).subscribe((addResponse) => {
      console.log(homeloan
      )
      console.log(12323);
      this.homeloanservices.GetAllHomeLoans().subscribe((getResponse) => {

        this.homeloans = getResponse;
        console.log(homeloan)
      }, (error) => {
        console.log(error);
      });

      //this.customer.customername

      if (this.homeloans) {
        this.ApplyLoanClick = false;
        this.ApplyHomeLoanClick = false;
        this.ApplyEducationLoanClick = false;
        this.ApplyPersonalLoanClick = false;
        this.YourLoanClick = false;
        this.LoanListClick = false;
        this.ApplyCarLoanClick = false;
        this.SubmitNumber = false;
        this.SubmitEditNumber = false;
        this.SubmitEducationNumber = false;
        this.SubmitEducationEditNumber = false;
        console.log(12323);
      }
    }, (error) => {
      console.log(error);
    });

  }

  onSubmitEducationLoanClick() {


    var educationloan: EducationLoan = this.newEducationLoanForm.value;
    this.educationloanservices.AddEducationLoan(educationloan).subscribe((addResponse) => {
      console.log(educationloan
      )
      console.log(12323);
      this.educationloanservices.GetAllEducationLoans().subscribe((getResponse) => {

        this.educationloans = getResponse;
        console.log(educationloan)
      }, (error) => {
        console.log(error);
      });

      //this.customer.customername

      if (this.educationloans) {
        this.ApplyLoanClick = false;
        this.ApplyHomeLoanClick = false;
        this.ApplyEducationLoanClick = false;
        this.ApplyPersonalLoanClick = false;
        this.YourLoanClick = false;
        this.LoanListClick = false;
        this.ApplyCarLoanClick = false;
        this.SubmitNumber = false;
        this.SubmitEditNumber = false;
        this.SubmitEducationNumber = false;
        this.SubmitEducationEditNumber = false;
        console.log(12323);
      }
    }, (error) => {
      console.log(error);
    });

  }

  onSubmitPersonalLoanClick() {


    var personalloan: PersonalLoan = this.newPersonalLoanForm.value;
    this.personalloanservices.AddPersonalLoan(personalloan).subscribe((addResponse) => {
      console.log(personalloan
      )
      console.log(12323);
      this.personalloanservices.GetAllPersonalLoans().subscribe((getResponse) => {

        this.personalloans = getResponse;
        console.log(personalloan)
      }, (error) => {
        console.log(error);
      });

      //this.customer.customername

      if (this.personalloans) {
        this.ApplyLoanClick = false;
        this.ApplyHomeLoanClick = false;
        this.ApplyEducationLoanClick = false;
        this.ApplyPersonalLoanClick = false;
        this.YourLoanClick = false;
        this.LoanListClick = false;
        this.ApplyCarLoanClick = false;
        this.SubmitNumber = false;
        this.SubmitEditNumber = false;
        this.SubmitEducationNumber = false;
        this.SubmitEducationEditNumber = false;
        console.log(12323);
      }
    }, (error) => {
      console.log(error);
    });

  }


  onSubmitEditNumberClick() {
    var L: number = 0
    var cust: string = this.newCustomerform.value.customerID;
    console.log(cust);
    this.carloanservices.GetCarLoanBycustomerID(cust).subscribe((response) => {
      
      console.log(response ,123);
      this.carloanscustomer = response;
      console.log(this.carloanscustomer[0], 678)
      if (this.carloanscustomer) { L = 1;}
     
    }, (error) => {
      console.log(error);
      });
    var cust: string = this.newCustomerform.value.customerID;
    console.log(cust);
    this.homeloanservices.GetHomeLoanBycustomerID(cust).subscribe((response) => {

      console.log(response, 123);
      this.homeloanscustomer = response;
      console.log(this.homeloanscustomer[0], 345)
      if (this.homeloanscustomer) { L = 1; }

    }, (error) => {
      console.log(error);
    });
    var cust: string = this.newCustomerform.value.customerID;
    console.log(cust);
    this.educationloanservices.GetEducationLoanBycustomerID(cust).subscribe((response) => {

      console.log(response, 123);
      this.educationloanscustomer = response;
      console.log(this.educationloanscustomer[0], 234)
      if (this.educationloanscustomer) { L = 1; }

    }, (error) => {
      console.log(error);
      });
    var cust: string = this.newCustomerform.value.customerID;
    console.log(cust);
    this.personalloanservices.GetPersonalLoanBycustomerID(cust).subscribe((response) => {

      console.log(response, 179);
      this.personalloanscustomer = response;
      console.log(this.personalloanscustomer[0], 678)
      if (this.personalloanscustomer) { L = 1; }

    }, (error) => {
      console.log(error);
      });
    
      this.ApplyLoanClick = false;
      this.ApplyHomeLoanClick = false;
      this.ApplyEducationLoanClick = false;
      this.ApplyPersonalLoanClick = false;
      this.YourLoanClick = true;
      this.LoanListClick = false;
      this.ApplyCarLoanClick = false;
      this.SubmitNumber = false;
      this.SubmitEditNumber = true;
      this.SubmitEducationNumber = false;
      this.SubmitEducationEditNumber = false;
    
    
  }


  

}

