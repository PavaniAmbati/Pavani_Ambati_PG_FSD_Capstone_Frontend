import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { adminusersInterface } from './Shared/adminusers';

@Injectable({
  providedIn: 'root'
})
export class AdminuserService {

  apiURL = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUsers(): Observable<adminusersInterface[]> {
    return this.http.get<adminusersInterface[]>(this.apiURL + '/adminusers')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getUsersbyusername(Username: string): Observable<adminusersInterface[]> {
    return this.http.get<adminusersInterface[]>(this.apiURL + '/adminusers' + '?' + 'Username=' + Username)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update employee
  updateUser(id: any, adminuser: any): Observable<adminusersInterface[]> {
    
    console.log(JSON.stringify(adminuser));
    return this.http.put<adminusersInterface[]>(this.apiURL + '/adminusers/' + id, JSON.stringify(adminuser), this.httpOptions)
 
    
     /* .pipe(
      retry(1),
      catchError(this.handleError) 
    ) */
  }

  isUserLoggedin(){
    let user = localStorage.getItem('localUser');
    return !(user === null);
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
