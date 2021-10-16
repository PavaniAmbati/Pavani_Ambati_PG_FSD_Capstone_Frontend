import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomertransactionService } from '../Shared/customertransaction.service';
import { CustomeraccountService } from '../Shared/customeraccount.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer-withdrawal',
  templateUrl: './customer-withdrawal.component.html',
  styleUrls: ['./customer-withdrawal.component.css'],
  providers: [CustomertransactionService, CustomeraccountService, DatePipe]
})
export class CustomerWithdrawalComponent implements OnInit {

  public withdrawals: any = [];
  public withdrawal: any = [];
  public custaccounts: any = [];
  public custaccount: any = [];
  public totalamount: any = [];
  public totalamountcalc: any = [];
  public localuser: any = [];
  public custid!: string;
  public localaccount: any = [];
  public accid!: string;

  //accid = this.actRoute.snapshot.params['Id'];
  //totalamount = this.actRoute.snapshot.params['Totalamount'];

  myDate = new Date();

  Message = 'Transaction successfully completed';
  transactioncomplete = false;


  constructor(
    public restApi: CustomertransactionService,
    public restApi1: CustomeraccountService,
    public router: Router,
    public actRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) {

  }

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
    
      this.transactioncomplete = true;
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
      this.totalamountcalc = (this.totalamount - transamount)
      console.log(this.custid);

      this.withdrawal = {

        "accountid": this.accid,
        "custid": this.custid,
        "transdate": this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
        "transtype": "withdrawal",
        "transamount": transamount,
        "balanceamount": this.totalamountcalc
  
      }
      
      console.log(this.withdrawal);
      this.restApi.createTransaction(this.withdrawal).subscribe(data => {
  
      })

  }

  backtoAccountdetails(){
    this.router.navigate(['/customeraccountdetails']);
  }

  logout(){
    localStorage.removeItem('localUser');
    localStorage.removeItem('localToaccount');
    localStorage.removeItem('localaccount');
    this.router.navigate(['/customerlogin']);

  }
}





