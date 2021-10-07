import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUpdatePasswordComponent } from './admin-update-password/admin-update-password.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminChequeBookAuthComponent } from './admin-cheque-book-auth/admin-cheque-book-auth.component';
import { AdminCustomerManagerComponent } from './admin-customer-manager/admin-customer-manager.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerUpdatePasswordComponent } from './customer-update-password/customer-update-password.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerAccountsPageComponent } from './customer-accounts-page/customer-accounts-page.component';
import { CustomerAccountSummaryComponent } from './customer-account-summary/customer-account-summary.component';
import { CustomerAccountTransactionHistoryComponent } from './customer-account-transaction-history/customer-account-transaction-history.component';
import { CustomerTransersPageComponent } from './customer-transers-page/customer-transers-page.component';
import { CustomerTransferFundsComponent } from './customer-transfer-funds/customer-transfer-funds.component';
import { CustomerTransferHistoryComponent } from './customer-transfer-history/customer-transfer-history.component';
import { CustomerBillpaymentsPageComponent } from './customer-billpayments-page/customer-billpayments-page.component';
import { CustomerBillpaymentComponent } from './customer-billpayment/customer-billpayment.component';
import { CustomerBillpaymentHistoryComponent } from './customer-billpayment-history/customer-billpayment-history.component';
import { CustomerChequebookRequestComponent } from './customer-chequebook-request/customer-chequebook-request.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminUpdatePasswordComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminChequeBookAuthComponent,
    AdminCustomerManagerComponent,
    CustomerLoginComponent,
    CustomerUpdatePasswordComponent,
    CustomerHomeComponent,
    CustomerAccountsPageComponent,
    CustomerAccountSummaryComponent,
    CustomerAccountTransactionHistoryComponent,
    CustomerTransersPageComponent,
    CustomerTransferFundsComponent,
    CustomerTransferHistoryComponent,
    CustomerBillpaymentsPageComponent,
    CustomerBillpaymentComponent,
    CustomerBillpaymentHistoryComponent,
    CustomerChequebookRequestComponent,
    FooterComponent,
    HeaderComponent,
    CustomerRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
