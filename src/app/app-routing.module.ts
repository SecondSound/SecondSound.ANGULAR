import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home/home.component";
import {LoginComponent} from "./components/account/login/login.component";
import {RegisterComponent} from "./components/account/register/register.component";
import {ContactComponent} from "./components/contact/contact/contact.component";
import {InfoHelpComponent} from "./components/info/info-help/info-help.component";
import {UserDashboardComponent} from "./components/account/dashboard/user-dashboard/user-dashboard.component";
import {AuthGuard} from "./services/guards/auth.guard";
import {
  ConfirmRegistrationComponent
} from "./components/account/register/confirm-registration/confirm-registration.component";
import {
  RegistrationConfirmedComponent
} from "./components/account/register/registration-confirmed/registration-confirmed.component";
import {RegisterFormComponent} from "./components/account/register/register-form/register-form.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent,
    children: [
      {
        path: "",
        component: RegisterFormComponent
      },
      {
        path: "confirm",
        component: ConfirmRegistrationComponent
      },
      {
        path: "confirmed",
        component: RegistrationConfirmedComponent
      },
    ]
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "info",
    component: InfoHelpComponent
  },
  {
    path: "user",
    component: UserDashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
