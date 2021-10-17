import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminuserService } from '../Shared/adminuser.service';

@Component({
  selector: 'app-admin-update-password',
  templateUrl: './admin-update-password.component.html',
  styleUrls: ['./admin-update-password.component.css'],
  providers: [AdminuserService]
})
export class AdminUpdatePasswordComponent implements OnInit {

  public adminuser: any = [];
  public adminusers: any = [];
  public id!: string;
  @Input() users = { Newpassword: '', Repeatpassword: '' }
  errorMessage = 'Passwords does not match. Try again';
  Passwordnotmatch = false;
  username = this.actRoute.snapshot.params['Username'];

  constructor(
    public restApi: AdminuserService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadadminusers();
  }

  //load all adminusers
  loadadminusers() {
    return this.restApi.getUsers().subscribe((data: {}) => {
      this.adminusers = data;
      console.log(this.adminusers);
    })

  }

  //update password if new and repeat password matches
  updatePassword(users: any) {

    if (users.Newpassword === users.Repeatpassword) {
      this.Passwordnotmatch = false;

      console.log(this.username)
      console.log(this.users.Repeatpassword)

      this.adminuser = { 
        "username": this.username, 
        "password": this.users.Repeatpassword 
      }
      this.restApi.updateUser(this.username, this.adminuser).subscribe(data => {
            this.router.navigate(['/adminlogin'])
          }) 

        }else {
      this.Passwordnotmatch = true;
    }
  }

  logout() {
    localStorage.removeItem('localUser');
    localStorage.removeItem('localAccount');
    this.router.navigate(['/adminlogin']);

  }

}
