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
import { CustomerAccountsPageComponent } from './customer-accounts-page/customer-accounts-page.component';
import { CustomerAccountSummaryComponent } from './customer-account-summary/customer-account-summary.component';
import { CustomerAccountTransactionHistoryComponent } from './customer-account-transaction-history/customer-account-transaction-history.component';
import { CustomerBillpaymentsPageComponent } from './customer-billpayments-page/customer-billpayments-page.component';
import { CustomerBillpaymentComponent } from './customer-billpayment/customer-billpayment.component';
import { CustomerBillpaymentHistoryComponent } from './customer-billpayment-history/customer-billpayment-history.component';
import { CustomerTransersPageComponent } from './customer-transers-page/customer-transers-page.component';
import { CustomerTransferFundsComponent } from './customer-transfer-funds/customer-transfer-funds.component';
import { CustomerTransferHistoryComponent } from './customer-transfer-history/customer-transfer-history.component';
import { CustomerChequebookRequestComponent } from './customer-chequebook-request/customer-chequebook-request.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "/customerlogin"},
  {path: "adminlogin", component: AdminLoginComponent},
  {path: "adminupdatepassword", component: AdminUpdatePasswordComponent},
  {path: "adminhome", component: AdminHomeComponent},
  {path: "admincustomermanager", component: AdminCustomerManagerComponent},
  {path: "adminchequebookauth", component: AdminChequeBookAuthComponent},
  {path: "customerlogin", component: CustomerLoginComponent},
  {path: "customerupdatepassword", component: CustomerUpdatePasswordComponent},
  {path: "customerhome", component: CustomerHomeComponent},
  {path: "customeraccountspage", component: CustomerAccountsPageComponent},
  {path: "customeraccountsummary", component: CustomerAccountSummaryComponent},
  {path: "customeraccounttransactionhistory", component: CustomerAccountTransactionHistoryComponent},
  {path: "customerbillpaymentspage", component: CustomerBillpaymentsPageComponent},
  {path: "customerbillpayment", component: CustomerBillpaymentComponent},
  {path: "customerbillpaymenthistory", component: CustomerBillpaymentHistoryComponent},
  {path: "customertransferpage", component: CustomerTransersPageComponent},
  {path: "customertransferFunds", component: CustomerTransferFundsComponent},
  {path: "customertransferhistory", component: CustomerTransferHistoryComponent},
  {path: "customerchequebookrequest", component: CustomerChequebookRequestComponent},
  {path: "customerregistration", component: CustomerRegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
