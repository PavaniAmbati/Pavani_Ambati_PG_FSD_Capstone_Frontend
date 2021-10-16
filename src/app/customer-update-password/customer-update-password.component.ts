import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../Shared/customer.service';

@Component({
  selector: 'app-customer-update-password',
  templateUrl: './customer-update-password.component.html',
  styleUrls: ['./customer-update-password.component.css'],
  providers: [CustomerService]
})
export class CustomerUpdatePasswordComponent implements OnInit {

  public customeruser: any = [];
  public customerusers: any = [];
  public localuser: any = [];
  public id!: string;
  public firstname!: string;
  @Input() users = { Newpassword: '', Repeatpassword: '' }
  errorMessage = 'Passwords does not match. Try again';
  Passwordnotmatch = false;
  username = this.actRoute.snapshot.params['Username'];

  constructor(
    public restApi: CustomerService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadcustomerusers();
  }

  loadcustomerusers() {
    return this.restApi.getCustomers().subscribe((data: {}) => {
      this.customerusers = data;
      console.log(this.customerusers);
    })

  }

  updatePassword(users: any) {

    if (users.Newpassword === users.Repeatpassword) {
      this.Passwordnotmatch = false;

      console.log(this.username)
      console.log(this.users.Repeatpassword)

      
      this.localuser = JSON.parse(localStorage.getItem('localUser')!);
      console.log(this.localuser)

      for (let i = 0; i < this.localuser.length; i++) {
        if (this.localuser[i].username === this.username) {
          this.id = this.localuser[i].id;
          this.firstname = this.localuser[i].firstname;
          console.log(this.id);
     
          this.customeruser = {
            "firstname": this.localuser[i].firstname,
            "lastname": this.localuser[i].lastname,
            "phonenumber": this.localuser[i].phonenumber,
            "email": this.localuser[i].email,
            "housenumber": this.localuser[i].housenumber,
            "streetname": this.localuser[i].streetname,
            "city": this.localuser[i].city,
            "state": this.localuser[i].state,
            "country": this.localuser[i].country,
            "postalcode": this.localuser[i].postalcode,
            "dateofbirth": this.localuser[i].dateofbirth,
            "onlineaccountstatus": this.localuser[i].onlineaccountstatus,
            "username": this.username,
            "password": this.users.Repeatpassword
          }
          
          this.restApi.updateUser(this.id, this.customeruser).subscribe(data => {
            this.router.navigate(['/customerlogin'])
          })

        }

      }
    } else {
      this.Passwordnotmatch = true;
    }
  }

  logout() {
    localStorage.removeItem('localUser');
    localStorage.removeItem('localtoaccount');
    localStorage.removeItem('localToaccount');
    this.router.navigate(['/customerlogin']);

  }

}
