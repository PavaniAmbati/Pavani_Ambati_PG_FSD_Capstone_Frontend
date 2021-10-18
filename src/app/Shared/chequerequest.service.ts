import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { chequerequestInterface } from './chequerequest';

@Injectable({
  providedIn: 'root'
})
export class ChequerequestService {

  //apiURL = 'http://localhost:8000/api'

  apiURL = 'http://capstoneproduction.eba-kjfwefmp.us-east-1.elasticbeanstalk.com/api'
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Get list of customers
  getChequerequests(): Observable<chequerequestInterface[]> {
    return this.http.get<chequerequestInterface[]>(this.apiURL + '/chequerequests')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getChequerequestsbystatus(approvalstatus: string): Observable<chequerequestInterface[]> {

    return this.http.get<chequerequestInterface[]>(this.apiURL + '/chequerequests/' + approvalstatus)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  // HttpClient API put() method => Update customer
  //updateCustomer(){}
  //>
  updateChequerequest(id: any, approvalstatus: any): Observable<chequerequestInterface[]> {
    console.log(JSON.stringify(approvalstatus));
    return this.http.put<chequerequestInterface[]>(this.apiURL + '/chequerequests/' + id, JSON.stringify(approvalstatus), this.httpOptions)
  }

  createRequest(chequerequest: any): Observable<chequerequestInterface[]> {
    return this.http.post<chequerequestInterface[]>(this.apiURL + '/chequerequests', JSON.stringify(chequerequest), this.httpOptions)
   
  }

  // Error handling 
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
