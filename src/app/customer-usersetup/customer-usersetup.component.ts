import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../Shared/customer.service';

@Component({
  selector: 'app-customer-usersetup',
  templateUrl: './customer-usersetup.component.html',
  styleUrls: ['./customer-usersetup.component.css'],
  providers: [CustomerService]
})
export class CustomerUsersetupComponent implements OnInit {

  public customerusers: any = [];
  public customeruser: any = [];
  public localaccount: any = [];
  public id!: string;

  @Input() users = { Username: '', Password: '', Repeatpassword: '' }
  errorMessage = 'Passwords do not match. Try again.';
  Passwordnotmatch = false;

  constructor(
    public restApi: CustomerService,
    public router: Router
  ) { }

  ngOnInit(): void {

    this.loadcustomerbyid(this.users);

  }

  //load customer by id
  loadcustomerbyid(users: any) {

    this.localaccount = JSON.parse(localStorage.getItem('localAccount')!);

    for (let i = 0; i < this.localaccount.length; i++) {
      this.id = this.localaccount[i].custid;
      console.log(this.id);
      return this.restApi.getCustomersbyid(this.id).subscribe((data: {}) => {
        this.customerusers = data;
        console.log(this.customerusers);
      })

    }

  }



//create new user login if new and repeat password matches
  createUser(users: any) {


    if (users.Password === users.Repeatpassword) {
      this.Passwordnotmatch = false;
      console.log(this.customerusers);
      console.log(users.Username);
      console.log(users.Password);
      this.customeruser =
          {
            "firstname": this.customerusers.firstname,
            "lastname": this.customerusers.lastname,
            "phonenumber": this.customerusers.phonenumber,
            "email": this.customerusers.email,
            "housenumber": this.customerusers.housenumber,
            "streetname": this.customerusers.streetname,
            "city": this.customerusers.city,
            "state": this.customerusers.state,
            "country": this.customerusers.country,
            "postalcode": this.customerusers.postalcode,
            "dateofbirth": this.customerusers.dateofbirth,
            "onlineaccountstatus": "waiting for approval",
            "username": users.Username,
            "password": users.Password
          }
        console.log(this.customeruser);

        this.restApi.updateUser(this.id, this.customeruser).subscribe(data => {
          this.router.navigate(['/customerlogin'])
        })

        //localStorage.setItem('localUser',JSON.stringify(this.customeruser));
       
      }else {
        this.Passwordnotmatch = true;
        console.log("invalid passwords");
      }
    } 
  }



