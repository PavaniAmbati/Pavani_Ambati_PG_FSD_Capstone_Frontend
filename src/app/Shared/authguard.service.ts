import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminuserService } from './adminuser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private adminuserService: AdminuserService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.adminuserService.isUserLoggedin())
          return true;
      this.router.navigate(['/adminlogin']);
         
      return false;    
  
    }
}
