import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBannerComponent } from './components/header/top-banner/top-banner.component';
import { HeaderComponent } from './components/header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { InfoHelpComponent } from './components/info/info-help/info-help.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {AuthService} from "./services/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorizationInterceptor} from "./services/interceptors/authorization.interceptor";
import { UserDashboardComponent } from './components/account/dashboard/user-dashboard/user-dashboard.component';
import {AuthManagementService} from "./services/auth-management.service";
import {AdvertisementService} from "./services/advertisement/advertisement.service";
import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import { AddAdvertisementComponent } from './components/advertisement/create-ad/add-advertisement.component';
registerLocaleData(localeNL, 'nl');
import {MatDialogModule} from "@angular/material/dialog";
import { AdvertisementDialogComponent } from './dialogs/advertisement-dialog/advertisement-dialog.component';
import {MatMenuModule} from "@angular/material/menu";
import { ProfileHeaderComponent } from './components/account/dashboard/profile-header/profile-header.component';
import { ConfirmRegistrationComponent } from './components/account/register/confirm-registration/confirm-registration.component';
import { RegistrationConfirmedComponent } from './components/account/register/registration-confirmed/registration-confirmed.component';
import { RegisterFormComponent } from './components/account/register/register-form/register-form.component';
import {MatSelectModule} from "@angular/material/select";
import { AdvertisementDetailsComponent } from './components/advertisement/ad-details/advertisement-details.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import {MatTreeModule} from "@angular/material/tree";
import { FiltertreeComponent } from './components/advertisement/ad-elements/filter-element/filtertree.component';
import { SelectedAdvertisementsComponent } from './components/advertisement/selected-ads/selected-advertisements.component';
import { SavedAdvertisementsComponent } from './components/advertisement/saved-ads/saved-advertisements.component';
import { BidDialogComponent } from './dialogs/bid-dialog/bid-dialog.component';
import { BidElementComponent } from './components/advertisement/ad-elements/bid-element/bid-element.component';
import { SellerElementComponent } from './components/advertisement/ad-elements/seller-element/seller-element.component';
import { AdvertisementElementComponent } from './components/advertisement/ad-elements/advertisement-element/advertisement-element.component';
import { AdCardComponent } from './components/advertisement/ad-elements/ad-card/ad-card.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { UserDetailsFormComponent } from './components/account/dashboard/user-dashboard/user-details-form/user-details-form.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {NotifierModule} from "angular-notifier";
import {ErrorHandlerInterceptor} from "./services/interceptors/error-handler.interceptor";
import { AdHorizontalCardComponent } from './components/advertisement/ad-elements/ad-horizontal-card/ad-horizontal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    InfoHelpComponent,
    UserDashboardComponent,
    AddAdvertisementComponent,
    AdvertisementDialogComponent,
    AdvertisementDialogComponent,
    UserDashboardComponent,
    ProfileHeaderComponent,
    ConfirmRegistrationComponent,
    RegistrationConfirmedComponent,
    RegisterFormComponent,
    AdvertisementDetailsComponent,
    PagenotfoundComponent,
    FiltertreeComponent,
    SelectedAdvertisementsComponent,
    SavedAdvertisementsComponent,
    BidDialogComponent,
    BidElementComponent,
    SellerElementComponent,
    AdvertisementElementComponent,
    AdCardComponent,
    UserDetailsFormComponent,
    AdHorizontalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatTreeModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    NotifierModule
  ],
  providers: [
    AuthService,
    AuthManagementService,
    AdvertisementService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }






