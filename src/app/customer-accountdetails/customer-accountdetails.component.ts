import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomeraccountService } from '../Shared/customeraccount.service';

@Component({
  selector: 'app-customer-accountdetails',
  templateUrl: './customer-accountdetails.component.html',
  styleUrls: ['./customer-accountdetails.component.css'],
  providers: [CustomeraccountService]
})
export class CustomerAccountdetailsComponent implements OnInit {

  public customeraccounts: any = [];
  public localaccount: any = [];
  public id!: string;

  constructor(
    public restApi: CustomeraccountService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadaccountsbycustid();
  }

  loadaccountsbycustid() {

    this.localaccount = JSON.parse(localStorage.getItem('localUser')!);

    for (let i = 0; i < this.localaccount.length; i++) {
      this.id = this.localaccount[i].id;
      console.log(this.id);
      return this.restApi.getAccountsbyCustid(this.id).subscribe((data: {}) => {
        this.customeraccounts = data;
        console.log(this.customeraccounts);
      })

    }

  }

  transactionhistory(account: any){
    console.log(account.accountid)
    this.router.navigate(['/customertransactionhistory/' + account.accountid]);

  }



}
