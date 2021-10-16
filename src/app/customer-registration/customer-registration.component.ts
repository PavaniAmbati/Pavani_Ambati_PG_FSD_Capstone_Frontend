import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomeraccountService } from '../Shared/customeraccount.service';
import { CustomerService } from '../Shared/customer.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css'],
  providers: [CustomerService, CustomeraccountService]
})
export class CustomerRegistrationComponent implements OnInit {

  public customeraccounts: any = [];
  public customeraccount: any = [];
  public id!: string;
  public customers: any = [];
  public custid!: string;
  public localaccount: any = [];

  @Input() users = {Accountnumber: '', Pinnumber: ''}
  errorMessage = 'Invalid Credentials. Try again.';
  invalidLogin = false;

  constructor(
    public restApi: CustomeraccountService,
    public restApi1: CustomerService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadcustomerusers();
  }

  loadcustomerusers(){
    return this.restApi.getCustomeraccounts().subscribe((data: {}) => {
      this.customeraccounts = data;
      console.log(this.customeraccounts);
    })

  }

  handleLogin(users: any) {
  
    //console.log(this.adminusers.length)
    for (let i = 0; i < this.customeraccounts.length; i++) {
      if (this.customeraccounts[i].accountnumber === users.Accountnumber && this.customeraccounts[i].pinnumber === users.Pinnumber) {
        console.log(this.customeraccounts);
        console.log(this.users);
        console.log("valid login");
        this.invalidLogin = false;
        this.id = this.customeraccounts[i].accountid
        console.log(this.id)
        this.customeraccount = 
        [{
        "id": this.id,
        "accounttype": this.customeraccounts[i].accounttype,
        "accountnumber": this.customeraccounts[i].accountnumber,
        "pinnumber": this.customeraccounts[i].pinnumber,
        "custid": this.customeraccounts[i].custid
      }]
      console.log(this.customeraccount);
        localStorage.setItem('localAccount',JSON.stringify(this.customeraccount));
        //this.router.navigate(['/customerusersetup']);
    } else {
      console.log("invalid login");
      
      this.invalidLogin = true;
      }
    }
  }

  getcustomerbyid() {

   
    this.localaccount = JSON.parse(localStorage.getItem('localAccount')!);

      for (let i = 0; i < this.localaccount.length; i++) {
        this.custid = this.localaccount[i].custid;
        console.log(this.custid);
        return this.restApi1.getCustomersbyid(this.custid).subscribe((data: {}) => {
          this.customers = data;
          console.log(this.customers);

          if (this.customers.username === ""){
            this.router.navigate(['/customerusersetup']);
          }else {
            this.router.navigate(['/customerregistration']);
          }

        })     
        
  }

}

}
