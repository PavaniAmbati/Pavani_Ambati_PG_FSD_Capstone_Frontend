import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdminuserService } from '../Shared/adminuser.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [AdminuserService]
})
export class AdminLoginComponent implements OnInit {

  public adminusers: any = [];
  public adminuser: any = [];

  public id!: string;

  @Input() users = { Username: '', Password: '' }
  errorMessage = 'Invalid Credentials. Try again.';
  invalidLogin = false;

  constructor(
    public restApi: AdminuserService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadadminusers();
  }

  loadadminusers() {
    return this.restApi.getUsers().subscribe((data: {}) => {
      this.adminusers = data;
      console.log(this.adminusers);
    })

  }

  //validate username and password entered to login
  handleLogin(users: any) {

    if (users.Username === '') {
      this.invalidLogin = true;
    } else {
      if (users.Password === '') {
        this.invalidLogin = true;
      } else {
        //console.log(this.adminusers.length)
        for (let i = 0; i < this.adminusers.length; i++) {
          if (this.adminusers[i].username === users.Username && this.adminusers[i].password === users.Password) {
            console.log(this.adminusers);
            console.log(this.users);
            console.log("valid login");
            this.invalidLogin = false;
            this.id = this.adminusers[i].id
            console.log(this.id)
            this.adminuser = [{ "id": this.id, "Username": users.Username, "Password": users.Password }]
            localStorage.setItem('localUser', JSON.stringify(this.adminuser));
            this.router.navigate(['/adminhome']);
          } else {
            console.log("invalid login");

            this.invalidLogin = true;
          }
        }
      }
    }
  }

   //validate username and password entered to update password
  updatePassword(users: any) {
    if (users.Username === '') {
      this.invalidLogin = true;
    } else {
      if (users.Password === '') {
        this.invalidLogin = true;
      } else {

        for (let i = 0; i < this.adminusers.length; i++) {
          if (this.adminusers[i].username === users.Username && this.adminusers[i].password === users.Password) {
            this.invalidLogin = false;
            this.id = this.adminusers[i].id
            console.log(this.id)
            //this.adminuser = [{"id": this.id, "Username": users.Username, "Password": users.Password}]
            //localStorage.setItem('localUser',JSON.stringify(this.adminuser));
            this.router.navigate(['/adminupdatepassword/' + users.Username]);
          } else {
            this.invalidLogin = true;
          }
        }
      }
    }
  }
}
