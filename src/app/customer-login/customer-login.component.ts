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
        this.customeruser = [{"id": this.id, "Username": users.Username, "Password": users.Password}]
        localStorage.setItem('localUser',JSON.stringify(this.customeruser));
        this.router.navigate(['/customerhome']);
    } else {
      console.log("invalid login");
      
      this.invalidLogin = true;
      }
    }
  }

}
