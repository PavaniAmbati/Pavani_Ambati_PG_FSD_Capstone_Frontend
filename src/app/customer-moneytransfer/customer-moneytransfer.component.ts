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

  Message = 'Transaction successfully completed';
  transactioncomplete = false;

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

  //get from account by account id
  getaccountbyid() {

    this.localaccount = JSON.parse(localStorage.getItem('localaccount')!);
   //console.log(this.localaccount);
    //console.log(this.localaccount.accountid);

      this.accid = this.localaccount.accountid;

      
      return this.restApi1.getAccountbyid(this.accid).subscribe((data: {}) => {
        this.custaccounts = data;
       
      })
        
  }

//save from account by accountid
  updateaccountbyid(moneytransfers: any) {
    //console.log(this.accid);
    this.totalamount = this.custaccounts.totalamount;
    this.totalamountcalc = ((this.totalamount) - (moneytransfers.transamount));

    this.custaccount = {
      "accountnumber": this.custaccounts.accountnumber,
      "accounttype": this.custaccounts.accounttype,
      "custid": this.custaccounts.custid,
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
      "custid": this.custaccounts.custid,
      "pinnumber": this.custaccounts.pinnumber,
      "totalamount": this.totalamountcalc

    }
    localStorage.setItem('localaccount', JSON.stringify(this.custaccount));

  }

//save moneytransfer transaction for from account
  createtransaction(moneytransfers: any) {

    //console.log(transamount);
    //console.log(this.datePipe.transform(this.myDate, 'yyyy-MM-dd'));

    this.localaccount = JSON.parse(localStorage.getItem('localaccount')!);
   
      this.custid = this.localaccount.custid;
      this.totalamount = this.localaccount.totalamount;
      this.totalamountcalc = ((this.totalamount) - (moneytransfers.transamount));
      //console.log(this.totalamountcalc);

      this.moneytransfer = {

        "accountid": this.accid,
        "custid": this.custid,
        "transdate": this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
        "transtype": "money transfer",
        "transamount": -moneytransfers.transamount,
        "balanceamount": this.totalamountcalc,
        "transaccountnumber": moneytransfers.toaccountnumber
  
      }
      
      //console.log(this.moneytransfer);
      this.restApi.createTransaction(this.moneytransfer).subscribe(data => {
  
      })

  }

//get to account details by account number
  getToaccountbynum(toaccountnumber: any) {

     console.log(toaccountnumber);
      return this.restApi1.getAccountbynum(toaccountnumber).subscribe((data: {}) => {
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

//save money transaction trasaction for 'to account'
  createTotransaction(moneytransfers: any) {

    this.localToaccount = JSON.parse(localStorage.getItem('localToaccount')!);

    console.log(moneytransfers.transamount);
    console.log(this.localToaccount);
    console.log(this.datePipe.transform(this.myDate, 'yyyy-MM-dd'));

    this.totalamount = this.localToaccount.totalamount;
    this.totalamountcalc = ((this.totalamount)+ +(moneytransfers.transamount));

    console.log(this.totalamount);
    console.log(this.totalamountcalc);

      this.moneytransfer = {

        "accountid": this.localToaccount.accountid,
        "transaccountnumber": this.accnum,
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

  //update account for 'to account'
  updateToaccountbyid(moneytransfers: any) {
    this.localToaccount = JSON.parse(localStorage.getItem('localToaccount')!);
    this.totalamount = this.localToaccount.totalamount;
    this.totalamountcalc = ((this.totalamount)+ +(moneytransfers.transamount));

    
    
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
      this.transactioncomplete = true;
      //localStorage.removeItem('localToaccount');
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

  backtoAccountdetails(){
    this.router.navigate(['/customeraccountdetails']);
  }

  logout(){
    localStorage.removeItem('localUser');
    localStorage.removeItem('localaccount');
    localStorage.removeItem('localToaccount');
    this.router.navigate(['/customerlogin']);

  }


}

