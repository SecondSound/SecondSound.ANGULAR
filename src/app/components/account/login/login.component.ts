import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {LoginCredentials} from "../../../shared/models/login-credentials.model";
import {AuthService} from "../../../services/auth.service";
import {LoginResponse} from "../../../shared/models/login-response.model";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthManagementService} from "../../../services/auth-management.service";

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  minLengthPassword: number = 6;
  email: string = '';
  password: string = '';

  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.minLengthPassword)]);

  matcher: LoginErrorStateMatcher = new LoginErrorStateMatcher();

  constructor(private authManagementService: AuthManagementService) { }

  ngOnInit(): void {
  }

  displayPassword() {
    this.hide = !this.hide;
  }

  logInUser() {
    const credentials: LoginCredentials = {
      email: this.email,
      password: this.password
    }

    this.authManagementService.logInUser(credentials);
  }
}
