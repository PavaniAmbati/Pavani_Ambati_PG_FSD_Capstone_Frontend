import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { customerTransactionInterface } from './customertransactions';

@Injectable({
  providedIn: 'root'
})
export class CustomertransactionService {

  apiURL = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getTransactionsbyAccid(id: string): Observable<customerTransactionInterface[]>{

    return this.http.get<customerTransactionInterface[]>(this.apiURL + '/customertransactions/accountid/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )

  }

  getTransactionsbytranstype(transtype: any): Observable<customerTransactionInterface[]> {

    return this.http.get<customerTransactionInterface[]>(this.apiURL + '/customertransactions/transtype/' + transtype)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )

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

