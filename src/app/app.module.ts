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
import { CustomerChequebookRequestComponent } from './customer-chequebook-request/customer-chequebook-request.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerAccountdetailsComponent } from './customer-accountdetails/customer-accountdetails.component';
import { CustomerTransactionhistoryComponent } from './customer-transactionhistory/customer-transactionhistory.component';
import { CustomerWithdrawalComponent } from './customer-withdrawal/customer-withdrawal.component';
import { CustomerDepositComponent } from './customer-deposit/customer-deposit.component';
import { CustomerMoneytransferComponent } from './customer-moneytransfer/customer-moneytransfer.component';
import { CustomerChequebookRequesthistoryComponent } from './customer-chequebook-requesthistory/customer-chequebook-requesthistory.component';
import { CustomerUsersetupComponent } from './customer-usersetup/customer-usersetup.component';


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
    CustomerChequebookRequestComponent,
    FooterComponent,
    HeaderComponent,
    CustomerRegistrationComponent,
    CustomerAccountdetailsComponent,
    CustomerTransactionhistoryComponent,
    CustomerWithdrawalComponent,
    CustomerDepositComponent,
    CustomerMoneytransferComponent,
    CustomerChequebookRequesthistoryComponent,
    CustomerUsersetupComponent
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
