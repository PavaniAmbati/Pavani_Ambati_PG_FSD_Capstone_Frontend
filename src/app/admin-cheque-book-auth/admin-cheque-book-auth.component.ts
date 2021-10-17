import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChequerequestService } from '../Shared/chequerequest.service';

@Component({
  selector: 'app-admin-cheque-book-auth',
  templateUrl: './admin-cheque-book-auth.component.html',
  styleUrls: ['./admin-cheque-book-auth.component.css'],
  providers: [ChequerequestService]
})
export class AdminChequeBookAuthComponent implements OnInit {

  public chequerequests: any = [];
  @Input() cheque = { approval: '' };
  public parsechequerequest: any;
  public stringifychequerequest: any;
  public approvalstatus: any = [];

  successMessage = 'Transaction successfully completed';
  transactioncomplete = false;

  errorMessage = 'Approval dropdown is blank';
  statusnotselected = false;

  constructor(
    public restApi: ChequerequestService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadchequelist();
  }

  //Get chequerequest list
  loadchequelist() {
    return this.restApi.getChequerequests().subscribe((data: {}) => {
      this.chequerequests = data;
      console.log(this.chequerequests);
    })
  }



  //filter chequerequest list by status
  filterChequerequest(status: any) {

    console.log(status);
    return this.restApi.getChequerequestsbystatus(status).subscribe((data: {}) => {
      this.chequerequests = data;
      console.log(this.chequerequests);
    })
  }

  //update customer online account status
  updateStatus(cheque: any, chequerequest: any) {

    if (cheque.approval === '') {
      this.statusnotselected = true;
    } else {

      console.log(cheque.approval);
      console.log(chequerequest);

      this.stringifychequerequest = JSON.stringify(chequerequest);
      // Parse from JSON  
      this.parsechequerequest = JSON.parse(this.stringifychequerequest);
      //console.log(this.parsecustomer);

      if (cheque.approval == "approve") {
        this.approvalstatus = {
          "chequetype": this.parsechequerequest.chequetype,
          "chequerequeststatus": "approved"
        }

        this.restApi.updateChequerequest(this.parsechequerequest.chequerequestid, this.approvalstatus).subscribe(data => {
          //this.router.navigate(['/admincustomermanager'])
          this.transactioncomplete = true;
          //window.location.reload();
        })
      } else {
        this.approvalstatus = {
          "chequetype": this.parsechequerequest.chequetype,
          "chequerequeststatus": "declined"
        }
        this.restApi.updateChequerequest(this.parsechequerequest.chequerequestid, this.approvalstatus).subscribe(data => {
          //this.router.navigate(['/admincustomermanagement'])
          this.transactioncomplete = true;
          //window.location.reload();
        })
      }

    }
  }

  logout() {
    localStorage.removeItem('localUser');
    localStorage.removeItem('localAccount');
    this.router.navigate(['/adminlogin']);

  }

}
