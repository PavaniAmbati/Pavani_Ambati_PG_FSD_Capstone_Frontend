import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../Shared/customer.service';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-admin-customer-manager',
  templateUrl: './admin-customer-manager.component.html',
  styleUrls: ['./admin-customer-manager.component.css'],
  providers: [CustomerService]
})
export class AdminCustomerManagerComponent implements OnInit {

  public customers: any = [];
  @Input() cust = { approval: '' };
  public parsecustomer: any;
  public stringifycustomer: any;
  public onlineaccountstatus: any = [];

  Message = 'Online user account does not exist to change status';
  OnlineUsernotexist = false;

  successMessage = 'Transaction successfully completed';
  transactioncomplete = false;

  errorMessage = 'Approval dropdown is blank';
  statusnotselected = false;

  constructor(
    public restApi: CustomerService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadcustlist();

  }


  //Get customer list
  loadcustlist() {
    return this.restApi.getCustomers().subscribe((data: {}) => {
      this.customers = data;
      console.log(this.customers);
    })
  }

  sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //filter customer list by status
  filterCustomer(onlineaccountstatus: any) {

    console.log(onlineaccountstatus.status);
    return this.restApi.getCustomersbystatus(onlineaccountstatus).subscribe((data: {}) => {
      this.customers = data;
      console.log(this.customers);
    })
  }


  //update customer online account status
  updateStatus(cust: any, customer: any) {

    if (cust.approval === '') {
      this.statusnotselected = true;
    } else {

      if (customer.username === '') {
        this.OnlineUsernotexist = true;
      } else {

        console.log(cust.approval);
        console.log(customer);

        this.stringifycustomer = JSON.stringify(customer);
        // Parse from JSON  
        this.parsecustomer = JSON.parse(this.stringifycustomer);
        //console.log(this.parsecustomer);

        if (cust.approval == "activate") {
          this.onlineaccountstatus = {
            "firstname": this.parsecustomer.firstname,
            "lastname": this.parsecustomer.lastname,
            "phonenumber": this.parsecustomer.phonenumber,
            "email": this.parsecustomer.email,
            "housenumber": this.parsecustomer.housenumber,
            "streetname": this.parsecustomer.streetname,
            "city": this.parsecustomer.city,
            "state": this.parsecustomer.state,
            "country": this.parsecustomer.country,
            "postalcode": this.parsecustomer.postalcode,
            "dateofbirth": this.parsecustomer.dateofbirth,
            "onlineaccountstatus": "active",
            "username": this.parsecustomer.username,
            "password": this.parsecustomer.password
          }
          //console.log(this.onlineaccountstatus);

          this.restApi.updateCustomer(this.parsecustomer.custid, this.onlineaccountstatus).subscribe(data => {
            //this.router.navigate(['/admincustomermanager'])
            //window.location.reload();
            this.transactioncomplete = true;


            //window.location.reload();
          })
        } else {
          this.onlineaccountstatus = this.onlineaccountstatus = {
            "firstname": this.parsecustomer.firstname,
            "lastname": this.parsecustomer.lastname,
            "phonenumber": this.parsecustomer.phonenumber,
            "email": this.parsecustomer.email,
            "housenumber": this.parsecustomer.housenumber,
            "streetname": this.parsecustomer.streetname,
            "city": this.parsecustomer.city,
            "state": this.parsecustomer.state,
            "country": this.parsecustomer.country,
            "postalcode": this.parsecustomer.postalcode,
            "dateofbirth": this.parsecustomer.dateofbirth,
            "onlineaccountstatus": "blocked",
            "username": this.parsecustomer.username,
            "password": this.parsecustomer.password
          }
          this.restApi.updateCustomer(this.parsecustomer.custid, this.onlineaccountstatus).subscribe(data => {
            //this.router.navigate(['/admincustomermanagement'])
            //window.location.reload();
            this.transactioncomplete = true;

            //window.location.reload();
          })
        }
      }
    }
  }

  logout() {
    localStorage.removeItem('localUser');
    localStorage.removeItem('localAccount');
    this.router.navigate(['/adminlogin']);

  }

}


