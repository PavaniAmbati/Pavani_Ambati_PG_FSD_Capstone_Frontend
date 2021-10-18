import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { customerAccountInterface } from './customeraccounts';

@Injectable({
  providedIn: 'root'
})
export class CustomeraccountService {

  //apiURL = 'http://localhost:8000/api'
  apiURL = 'http://capstoneproduction.eba-kjfwefmp.us-east-1.elasticbeanstalk.com/api'

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCustomeraccounts(): Observable<customerAccountInterface[]> {
    return this.http.get<customerAccountInterface[]>(this.apiURL + '/customeraccounts')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getAccountsbyCustid(id: string): Observable<customerAccountInterface[]>{

    return this.http.get<customerAccountInterface[]>(this.apiURL + '/customeraccounts/custid/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )

  }

  getAccountbyid(accid: string): Observable<customerAccountInterface[]>{

    return this.http.get<customerAccountInterface[]>(this.apiURL + '/customeraccounts/' + accid)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )

  }

  
  getAccountbynum(accountnumber: string): Observable<customerAccountInterface[]>{

    return this.http.get<customerAccountInterface[]>(this.apiURL + '/customeraccounts/accountnumber/' + accountnumber)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )

  }

  updateAccountbyid(id: any, custaccount: any): Observable<customerAccountInterface[]> {
    console.log(JSON.stringify(custaccount));
    return this.http.put<customerAccountInterface[]>(this.apiURL + '/customeraccounts/' + id, JSON.stringify(custaccount), this.httpOptions)
  }


  handleError(error: { error: { message: string; }; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}





