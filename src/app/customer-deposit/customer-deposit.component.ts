import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomertransactionService } from '../Shared/customertransaction.service';
import { CustomeraccountService } from '../Shared/customeraccount.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer-deposit',
  templateUrl: './customer-deposit.component.html',
  styleUrls: ['./customer-deposit.component.css'],
  providers: [CustomertransactionService, CustomeraccountService, DatePipe]
})
export class CustomerDepositComponent implements OnInit {

  public deposits: any = [];
  public deposit: any = [];
  public custaccounts: any = [];
  public custaccount: any = [];
  public totalamount: any = [];
  public totalamountcalc: any = [];
  public localuser: any = [];
  public custid!: string;
  public localaccount: any = [];
  public accid!: string;

  myDate = new Date();

  constructor(
    public restApi: CustomertransactionService,
    public restApi1: CustomeraccountService,
    public router: Router,
    public actRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getaccountbyid();
  }

  getaccountbyid() {

    this.localaccount = JSON.parse(localStorage.getItem('localaccount')!);
    console.log(this.localaccount);
    console.log(this.localaccount.accountid);

      this.accid = this.localaccount.accountid;

      
      return this.restApi1.getAccountbyid(this.accid).subscribe((data: {}) => {
        this.custaccounts = data;
       
      })
        
  }

  updateaccountbyid() {
    console.log(this.accid);
    this.custaccount = {
      "accountnumber": this.custaccounts.accountnumber,
      "accounttype": this.custaccounts.accounttype,
      "custid": this.custid,
      "pinnumber": this.custaccounts.pinnumber,
      "totalamount": this.totalamountcalc

    }
    console.log(this.custaccount);
    
    this.restApi1.updateAccountbyid(this.accid, this.custaccount).subscribe(data => {
      //this.router.navigate(['/admincustomermanager'])
    })

    this.custaccount = {
      "accountid": this.accid,
      "accountnumber": this.custaccounts.accountnumber,
      "accounttype": this.custaccounts.accounttype,
      "custid": this.custid,
      "pinnumber": this.custaccounts.pinnumber,
      "totalamount": this.totalamountcalc

    }
    localStorage.setItem('localaccount', JSON.stringify(this.custaccount));

  }


  createtransaction(transamount: any) {

    console.log(transamount);
    console.log(this.datePipe.transform(this.myDate, 'yyyy-MM-dd'));

    this.localaccount = JSON.parse(localStorage.getItem('localaccount')!);
   
      this.custid = this.localaccount.custid;
      this.totalamount = this.localaccount.totalamount;
      this.totalamountcalc = ((this.totalamount) + +(transamount));
      console.log(this.totalamountcalc);

      this.deposit = {

        "accountid": this.accid,
        "custid": this.custid,
        "transdate": this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
        "transtype": "deposit",
        "transamount": transamount,
        "balanceamount": this.totalamountcalc
  
      }
      
      console.log(this.deposit);
      this.restApi.createTransaction(this.deposit).subscribe(data => {
  
      })

  }

}
