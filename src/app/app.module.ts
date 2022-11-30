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
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {AuthService} from "./services/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorizationInterceptor} from "./services/interceptors/authorization.interceptor";
import { UserDashboardComponent } from './components/account/dashboard/user-dashboard/user-dashboard.component';
import {AuthManagementService} from "./services/auth-management.service";
import {MatMenuModule} from "@angular/material/menu";
import { ProfileHeaderComponent } from './components/account/dashboard/profile-header/profile-header.component';

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
    ProfileHeaderComponent
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
    MatMenuModule
  ],
  providers: [
    AuthService,
    AuthManagementService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
