import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomeraccountService } from '../Shared/customeraccount.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  public customeraccounts: any = [];
  public customeraccount: any = [];
  public id!: string;

  @Input() users = {Accountnumber: '', Pinnumber: ''}
  errorMessage = 'Invalid Credentials. Try again.';
  invalidLogin = false;

  constructor(
    public restApi: CustomeraccountService,
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
        this.router.navigate(['/customerusersetup']);
    } else {
      console.log("invalid login");
      
      this.invalidLogin = true;
      }
    }
  }

}
