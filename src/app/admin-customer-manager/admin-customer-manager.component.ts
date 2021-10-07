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
  @Input() cust = { approval: '' }
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

  
  //Get category item list
  loadcustlist() {
    return this.restApi.getCustomers().subscribe((data: {}) => {
      this.customers = data;
      console.log(this.customers);
    })
  }

  updateStatus(cust: any, customer: any) {

    console.log(cust.approval);
    console.log(customer);

    this.stringifycustomer = JSON.stringify(customer);  
     // Parse from JSON  
    this.parsecustomer = JSON.parse(this.stringifycustomer);   
    console.log(this.parsecustomer.custid);

    if(cust.approval == "approve"){
      this.onlineaccountstatus = {"onlineaccountstatus": "active"}
      this.restApi.updateCustomer(this.parsecustomer.custid, this.onlineaccountstatus).subscribe(data => {
        this.router.navigate(['/admincustomermanagement'])
      }) 
    }else {
      this.onlineaccountstatus = {"onlineaccountstatus": "blocked"}
      this.restApi.updateCustomer(this.parsecustomer.custid, this.onlineaccountstatus).subscribe(data => {
        this.router.navigate(['/admincustomermanagement'])
      }) 
    }


   

  }

}
