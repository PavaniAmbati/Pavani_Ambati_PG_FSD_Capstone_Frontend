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
  public customeraccount: any = [];
  public localaccount: any = [];
  public id!: string;

  constructor(
    public restApi: CustomeraccountService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadaccountsbycustid();
  }

  //load customer account by custid
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

  //redirect to transaction history page
  transactionhistory(account: any) {
    console.log(account.accountid)
    this.router.navigate(['/customertransactionhistory/' + account.accountid]);

  }

  //save selected customer account in local storage and redirect to withdrawal page
  withdrawal(account: any) {
    console.log(account.accountid)

    this.customeraccount = {
        "accountid":account.accountid,
        "accountnumber": account.accountnumber,
        "accounttype": account.accounttype,
        "custid": account.custid,
        "pinnumber": account.pinnumber,
        "totalamount": account.totalamount
      }
      console.log(this.customeraccount);
      localStorage.setItem('localaccount', JSON.stringify(this.customeraccount));
    this.router.navigate(['/customerwithdrawal/']);

  }

  //save selected customer account in local storage and redirect to deposit page
  deposit(account: any) {
    console.log(account.accountid)

    this.customeraccount = {
        "accountid":account.accountid,
        "accountnumber": account.accountnumber,
        "accounttype": account.accounttype,
        "custid": account.custid,
        "pinnumber": account.pinnumber,
        "totalamount": account.totalamount
      }
      console.log(this.customeraccount);
      localStorage.setItem('localaccount', JSON.stringify(this.customeraccount));
    this.router.navigate(['/customerdeposit/']);
    
  }

  //save selected customer account in local storage and redirect to money transfer page
  moneytransfer(account: any) {
    console.log(account.accountid)

    this.customeraccount = {
        "accountid":account.accountid,
        "accountnumber": account.accountnumber,
        "accounttype": account.accounttype,
        "custid": account.custid,
        "pinnumber": account.pinnumber,
        "totalamount": account.totalamount
      }
      console.log(this.customeraccount);
      localStorage.setItem('localaccount', JSON.stringify(this.customeraccount));
    this.router.navigate(['/customermoneytransfer/' + account.accountid + '/' + account.accountnumber]);

  }

  //redirect to cheque request page
  chequerequest(account: any) {
    console.log(account.accountid)
    this.router.navigate(['/customerchequebookrequest/' + account.accountid + '/' + account.accountnumber]);

  }

  logout(){
    localStorage.removeItem('localUser');
    localStorage.removeItem('localaccount');
    localStorage.removeItem('localToaccount');
    this.router.navigate(['/customerlogin']);

  }  


}
