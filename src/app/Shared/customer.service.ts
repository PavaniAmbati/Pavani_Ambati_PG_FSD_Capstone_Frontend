import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { customerInterface } from './customers';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiURL = 'http://localhost:8000/api'
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
  }

    //Get list of customers
    getCustomers(): Observable<customerInterface[]> {
      return this.http.get<customerInterface[]>(this.apiURL + '/customers')
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }

    getCustomersbyid(id: string): Observable<customerInterface[]>{
      
      return this.http.get<customerInterface[]>(this.apiURL + '/customers/id/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  } 

    getCustomersbystatus(onlineaccountstatus: string): Observable<customerInterface[]>{
      
      return this.http.get<customerInterface[]>(this.apiURL + '/customers/' + onlineaccountstatus)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  } 


    // HttpClient API put() method => Update customer
    //updateCustomer(){}
    //>
  updateCustomer(id: any, onlineaccountstatus: any): Observable<customerInterface[]>{
      console.log(JSON.stringify(onlineaccountstatus));
     return this.http.put<customerInterface[]>(this.apiURL + '/customers/' + id, JSON.stringify(onlineaccountstatus), this.httpOptions)
    }

  updateUser(id: any, customeruser: any): Observable<customerInterface[]> {
    
    console.log(JSON.stringify(customeruser));
    return this.http.put<customerInterface[]>(this.apiURL + '/customers/' + id, JSON.stringify(customeruser), this.httpOptions)

  }

  isUserLoggedin(){
    let user = localStorage.getItem('localUser');
    return !(user === null);
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
