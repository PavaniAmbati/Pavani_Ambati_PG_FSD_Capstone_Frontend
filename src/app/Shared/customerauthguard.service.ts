import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerauthguardService {

  constructor(private customerService: CustomerService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.customerService.isUserLoggedin())
          return true;
      this.router.navigate(['/adminlogin']);
           
      return false;    
    
    }
}
