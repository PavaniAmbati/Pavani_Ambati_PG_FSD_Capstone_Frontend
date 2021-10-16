import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomertransactionService } from '../Shared/customertransaction.service';

@Component({
  selector: 'app-customer-transactionhistory',
  templateUrl: './customer-transactionhistory.component.html',
  styleUrls: ['./customer-transactionhistory.component.css']
})
export class CustomerTransactionhistoryComponent implements OnInit {

  public customertransactions: any = [];

  id = this.actRoute.snapshot.params['Id'];

  constructor(
    public restApi: CustomertransactionService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadtransactionsbyaccid();
  }

//load all transaction by account id
  loadtransactionsbyaccid() {

    return this.restApi.getTransactionsbyAccid(this.id).subscribe((data: {}) => {
      this.customertransactions = data;
      console.log(this.customertransactions);
    })

  }

   //filter customer transactions list by transaction type
  filterTransaction(transtype: any) {
    console.log(transtype);
    return this.restApi.getTransactionsbytranstype(transtype).subscribe((data: {}) => {
      this.customertransactions = data;
      console.log(this.customertransactions);
    }) 


  }

  logout(){
    localStorage.removeItem('localUser');
    localStorage.removeItem('localaccount');
    localStorage.removeItem('localToaccount');
    this.router.navigate(['/customerlogin']);

  }


}