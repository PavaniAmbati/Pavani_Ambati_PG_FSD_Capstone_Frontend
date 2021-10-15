import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUpdatePasswordComponent } from './admin-update-password/admin-update-password.component';
import { AdminChequeBookAuthComponent } from './admin-cheque-book-auth/admin-cheque-book-auth.component';
import { AdminCustomerManagerComponent } from './admin-customer-manager/admin-customer-manager.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerUpdatePasswordComponent } from './customer-update-password/customer-update-password.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerChequebookRequestComponent } from './customer-chequebook-request/customer-chequebook-request.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { AuthguardService } from './Shared/authguard.service';
import { CustomerWithdrawalComponent } from './customer-withdrawal/customer-withdrawal.component';
import { CustomerDepositComponent } from './customer-deposit/customer-deposit.component';
import { CustomerMoneytransferComponent } from './customer-moneytransfer/customer-moneytransfer.component';
import { CustomerAccountdetailsComponent } from './customer-accountdetails/customer-accountdetails.component';
import { CustomerTransactionhistoryComponent } from './customer-transactionhistory/customer-transactionhistory.component';
import { CustomerChequebookRequesthistoryComponent } from './customer-chequebook-requesthistory/customer-chequebook-requesthistory.component';
import { CustomerUsersetupComponent } from './customer-usersetup/customer-usersetup.component';
import { CustomerauthguardService } from './Shared/customerauthguard.service';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "/customerlogin"},
  {path: "adminlogin", component: AdminLoginComponent},
  {path: "adminupdatepassword", component: AdminUpdatePasswordComponent,canActivate:[AuthguardService]},
  {path: "adminhome", component: AdminHomeComponent,canActivate:[AuthguardService]},
  {path: "admincustomermanager", component: AdminCustomerManagerComponent,canActivate:[AuthguardService]},
  {path: "adminchequebookauth", component: AdminChequeBookAuthComponent,canActivate:[AuthguardService]},
  {path: "adminupdatepassword/:Username", component: AdminUpdatePasswordComponent,canActivate:[AuthguardService]},
  {path: "customerlogin", component: CustomerLoginComponent},
  {path: "customerregistration", component: CustomerRegistrationComponent,canActivate:[CustomerauthguardService]},
  {path: "customerusersetup", component: CustomerUsersetupComponent,canActivate:[CustomerauthguardService]},
  {path: "customerupdatepassword", component: CustomerUpdatePasswordComponent,canActivate:[CustomerauthguardService]},
  {path: "customerupdatepassword/:Username", component: CustomerUpdatePasswordComponent,canActivate:[CustomerauthguardService]},
  {path: "customerhome", component: CustomerHomeComponent,canActivate:[CustomerauthguardService]},
  {path: "customeraccountdetails", component: CustomerAccountdetailsComponent,canActivate:[CustomerauthguardService]},
  {path: "customerwithdrawal", component: CustomerWithdrawalComponent,canActivate:[CustomerauthguardService]},
  {path: "customerdeposit", component: CustomerDepositComponent,canActivate:[CustomerauthguardService]},
  {path: "customermoneytransfer", component: CustomerMoneytransferComponent,canActivate:[CustomerauthguardService]},
  {path: "customertransactionhistory", component: CustomerTransactionhistoryComponent,canActivate:[CustomerauthguardService]},
  {path: "customerchequebookrequest", component: CustomerChequebookRequestComponent,canActivate:[CustomerauthguardService]},
  {path: "customerchequebookrequesthistory", component: CustomerChequebookRequesthistoryComponent,canActivate:[CustomerauthguardService]},
  {path: "customertransactionhistory/:Id", component:CustomerTransactionhistoryComponent,canActivate:[CustomerauthguardService]},
  //{path: "customerwithdrawal/:Id/:Totalamount", component:CustomerWithdrawalComponent},
  //{path: "customerdeposit/:Id/:Totalamount", component:CustomerDepositComponent},
  {path: "customermoneytransfer/:Id/:Accountnumber", component:CustomerMoneytransferComponent,canActivate:[CustomerauthguardService]},
  {path: "customerchequebookrequest/:Id/:Accountnumber", component: CustomerChequebookRequestComponent,canActivate:[CustomerauthguardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
