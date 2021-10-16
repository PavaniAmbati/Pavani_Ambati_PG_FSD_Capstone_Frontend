import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../Shared/customer.service';

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

 //filter customer list by status
  filterCustomer(onlineaccountstatus: any) {

    console.log(onlineaccountstatus.status);
   return this.restApi.getCustomersbystatus(onlineaccountstatus.status).subscribe((data: {}) => {
      this.customers = data;
      console.log(this.customers);
    }) 
}


  //update customer online account status
  updateStatus(cust: any, customer: any) {

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
        "onlineaccountstatus": "active"
      }
      //console.log(this.onlineaccountstatus);

      this.restApi.updateCustomer(this.parsecustomer.custid, this.onlineaccountstatus).subscribe(data => {
        //this.router.navigate(['/admincustomermanager'])
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
        "onlineaccountstatus": "blocked"
      }
      this.restApi.updateCustomer(this.parsecustomer.custid, this.onlineaccountstatus).subscribe(data => {
        //this.router.navigate(['/admincustomermanagement'])
      })
    }


  }

  logout(){
    localStorage.removeItem('localUser');
    localStorage.removeItem('localAccount');
    this.router.navigate(['/adminlogin']);

  }

}


