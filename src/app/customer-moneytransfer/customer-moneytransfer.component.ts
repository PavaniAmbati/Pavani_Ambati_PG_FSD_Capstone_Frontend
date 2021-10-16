import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomertransactionService } from '../Shared/customertransaction.service';
import { CustomeraccountService } from '../Shared/customeraccount.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer-moneytransfer',
  templateUrl: './customer-moneytransfer.component.html',
  styleUrls: ['./customer-moneytransfer.component.css'],
  providers: [CustomertransactionService, CustomeraccountService, DatePipe]
})
export class CustomerMoneytransferComponent implements OnInit {

  public moneytransfers: any = [];
  public moneytransfer: any = [];
  public custaccounts: any = [];
  public custaccount: any = [];
  public totalamount: any = [];
  public totalamountcalc: any = [];
  public localuser: any = [];
  public custid!: string;
  public localaccount: any = [];
  public accid!: string;

  public custToaccounts: any = [];
  public custToaccount: any = [];
  public localToaccount: any = [];

  myDate = new Date();

  accnum = this.actRoute.snapshot.params['Accountnumber'];

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
   //console.log(this.localaccount);
    //console.log(this.localaccount.accountid);

      this.accid = this.localaccount.accountid;

      
      return this.restApi1.getAccountbyid(this.accid).subscribe((data: {}) => {
        this.custaccounts = data;
       
      })
        
  }


  updateaccountbyid() {
    //console.log(this.accid);
    this.custaccount = {
      "accountnumber": this.custaccounts.accountnumber,
      "accounttype": this.custaccounts.accounttype,
      "custid": this.custid,
      "pinnumber": this.custaccounts.pinnumber,
      "totalamount": this.totalamountcalc

    }
    //console.log(this.custaccount);
    
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

    //console.log(transamount);
    //console.log(this.datePipe.transform(this.myDate, 'yyyy-MM-dd'));

    this.localaccount = JSON.parse(localStorage.getItem('localaccount')!);
   
      this.custid = this.localaccount.custid;
      this.totalamount = this.localaccount.totalamount;
      this.totalamountcalc = ((this.totalamount) - (transamount));
      //console.log(this.totalamountcalc);

      this.moneytransfer = {

        "accountid": this.accid,
        "custid": this.custid,
        "transdate": this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
        "transtype": "money transfer",
        "transamount": transamount,
        "balanceamount": this.totalamountcalc
  
      }
      
      //console.log(this.moneytransfer);
      this.restApi.createTransaction(this.moneytransfer).subscribe(data => {
  
      })

  }


  getToaccountbynum(accountnumber: any) {

     console.log(accountnumber);
      return this.restApi1.getAccountbynum(accountnumber).subscribe((data: {}) => {
        this.custToaccounts = data;
        console.log(this.custToaccounts);
       
        for (let i = 0; i < this.custToaccounts.length; i++) {
          console.log(this.custToaccounts[i].accountnumber);
        this.custToaccount = {
          "accountid": this.custToaccounts[i].accountid,
          "accountnumber": this.custToaccounts[i].accountnumber,
          "accounttype": this.custToaccounts[i].accounttype,
          "custid": this.custToaccounts[i].custid,
          "pinnumber": this.custToaccounts[i].pinnumber,
          "totalamount": this.custToaccounts[i].totalamount
    
        }
        console.log(this.custToaccount);
        localStorage.setItem('localToaccount', JSON.stringify(this.custToaccount));
      }
      })  

      
    
  }


  createTotransaction(moneytransfers: any) {

    this.localToaccount = JSON.parse(localStorage.getItem('localToaccount')!);

    console.log(moneytransfers.transamount);
    console.log(this.datePipe.transform(this.myDate, 'yyyy-MM-dd'));

    this.totalamount = this.localToaccount.totalamount;
    this.totalamountcalc = ((this.totalamount)+ +(moneytransfers.transamount));

    console.log(this.totalamount);
    console.log(this.totalamountcalc);

      this.moneytransfer = {

        "accountid": this.localToaccount.accountid,
        "transfromaccountnumber": this.localaccount.accountnumber,
        "custid": this.localToaccount.custid,
        "transdate": this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
        "transtype": "money transfer",
        "transamount": moneytransfers.transamount,
        "balanceamount": this.totalamountcalc
  
      }
      
      console.log(this.moneytransfer);

      this.restApi.createTransaction(this.moneytransfer).subscribe(data => {
  
      })

  }

  updateToaccountbyid() {

    this.localToaccount = JSON.parse(localStorage.getItem('localToaccount')!);
    
    this.custToaccount = {
      "accountnumber": this.localToaccount.accountnumber,
      "accounttype": this.localToaccount.accounttype,
      "custid": this.localToaccount.custid,
      "pinnumber": this.localToaccount.pinnumber,
      "totalamount": this.totalamountcalc

    }
    console.log(this.custToaccount);
    
    this.restApi1.updateAccountbyid(this.localToaccount.accountid, this.custToaccount).subscribe(data => {
      //this.router.navigate(['/admincustomermanager'])
    }) 

    this.custToaccount = {
      "accountid": this.localToaccount.accoutnumber,
      "accountnumber": this.localToaccount.accountnumber,
      "accounttype": this.localToaccount.accounttype,
      "custid": this.localToaccount.custid,
      "pinnumber": this.localToaccount.pinnumber,
      "totalamount": this.totalamountcalc

    }
    localStorage.setItem('localToaccount', JSON.stringify(this.custToaccount));

  }

  logout(){
    localStorage.removeItem('localUser');
    localStorage.removeItem('localaccount');
    this.router.navigate(['/customerlogin']);

  }


}

