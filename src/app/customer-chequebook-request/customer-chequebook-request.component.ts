import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChequerequestService } from '../Shared/chequerequest.service';

@Component({
  selector: 'app-customer-chequebook-request',
  templateUrl: './customer-chequebook-request.component.html',
  styleUrls: ['./customer-chequebook-request.component.css'],
  providers: [ChequerequestService]
})
export class CustomerChequebookRequestComponent implements OnInit {

  public chequerequests: any = [];
  public chequerequest: any = [];

  accid = this.actRoute.snapshot.params['Id'];
  accountnumber = this.actRoute.snapshot.params['Accountnumber'];

  constructor(
    public restApi: ChequerequestService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  createChequerequest(chequetype: any){

    this.chequerequest = {

      "accountnumber": this.accountnumber,
      "accountid": this.accid,
      "chequetype": chequetype,
      "chequerequeststatus": "wating for approval"
    }

    console.log(this.chequerequest);

    this.restApi.createRequest(this.chequerequest).subscribe(data => {
      
    }) 

  }
}

      

       

