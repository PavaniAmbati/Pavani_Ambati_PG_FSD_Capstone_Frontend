import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../Shared/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
  providers: [CustomerService]
})
export class CustomerLoginComponent implements OnInit {

  public customerusers: any = [];
  public customeruser: any = [];

  public id!: string;

  @Input() users = {Username: '', Password: ''}
  errorMessage = 'Invalid Credentials. Try again.';
  invalidLogin = false;

  constructor(
    public restApi: CustomerService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadcustomerusers();
  }

  loadcustomerusers(){
    return this.restApi.getCustomers().subscribe((data: {}) => {
      this.customerusers = data;
      console.log(this.customerusers);
    })

  }

  handleLogin(users: any) {
  
    //console.log(this.adminusers.length)
    for (let i = 0; i < this.customerusers.length; i++) {
      if (this.customerusers[i].username === users.Username && this.customerusers[i].password === users.Password) {
        console.log(this.customerusers);
        console.log(this.users);
        console.log("valid login");
        this.invalidLogin = false;
        this.id = this.customerusers[i].custid
        console.log(this.id)
        this.customeruser = 
        [{
        "id": this.id,
        "firstname": this.customerusers[i].firstname,
        "lastname": this.customerusers[i].lastname,
        "phonenumber": this.customerusers[i].phonenumber,
        "email": this.customerusers[i].email,
        "housenumber": this.customerusers[i].housenumber,
        "streetname": this.customerusers[i].streetname,
        "city": this.customerusers[i].city,
        "state": this.customerusers[i].state,
        "country": this.customerusers[i].country,
        "postalcode": this.customerusers[i].postalcode,
        "dateofbirth": this.customerusers[i].dateofbirth,
        "onlineaccountstatus": this.customerusers[i].onlineaccountstatus,
        "username": this.customerusers[i].username,
        "password": this.customerusers[i].password
      }]
      console.log(this.customeruser);
        localStorage.setItem('localUser',JSON.stringify(this.customeruser));
        this.router.navigate(['/customerhome']);
    } else {
      console.log("invalid login");
      
      this.invalidLogin = true;
      }
    }
  }

  updatePassword(users: any) {
  
    for (let i = 0; i < this.customerusers.length; i++) {
      if (this.customerusers[i].username === users.Username && this.customerusers[i].password === users.Password) {
        this.invalidLogin = false;
        this.id = this.customerusers[i].custid
        console.log(this.id)
        this.customeruser = 
        [{
        "id": this.id,
        "firstname": this.customerusers[i].firstname,
        "lastname": this.customerusers[i].lastname,
        "phonenumber": this.customerusers[i].phonenumber,
        "email": this.customerusers[i].email,
        "housenumber": this.customerusers[i].housenumber,
        "streetname": this.customerusers[i].streetname,
        "city": this.customerusers[i].city,
        "state": this.customerusers[i].state,
        "country": this.customerusers[i].country,
        "postalcode": this.customerusers[i].postalcode,
        "dateofbirth": this.customerusers[i].dateofbirth,
        "onlineaccountstatus": this.customerusers[i].onlineaccountstatus,
        "username": this.customerusers[i].username,
        "password": this.customerusers[i].password
      }]
      console.log(this.customeruser);
        localStorage.setItem('localUser',JSON.stringify(this.customeruser));
        this.router.navigate(['/customerupdatepassword/'+ users.Username]); 
    } else {
      this.invalidLogin = true;
      }
    }
}

}
