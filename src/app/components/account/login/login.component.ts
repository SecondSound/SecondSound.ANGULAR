import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {LoginCredentials} from "../../../shared/models/login-credentials.model";
import {AuthService} from "../../../services/auth.service";
import {LoginResponse} from "../../../shared/models/login-response.model";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

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
  private tokenKey: string = environment.JWT_TOKEN_KEY;
  userBehaviorSubject: BehaviorSubject<LoginResponse> = new BehaviorSubject<LoginResponse>({
    firstName: '',
    lastName: '',
    accessToken: '',
    userId: 0
  });
  userBehaviorSubject$: Observable<LoginResponse> = this.userBehaviorSubject.asObservable();
  hide: boolean = true;
  loggedIn: boolean = false;
  user: any;
  minLengthPassword: number = 6;
  email: string = '';
  password: string = '';

  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.minLengthPassword)]);

  matcher: LoginErrorStateMatcher = new LoginErrorStateMatcher();

  constructor(private authService: AuthService) { }

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

    this.authService.postLogin(credentials).subscribe( (response) => {
      this.storeLoggedInUser(response);
      this.loggedIn = true;
      this.user = response;
    });
  }

  storeLoggedInUser(user: LoginResponse) {
    localStorage.setItem(this.tokenKey, JSON.stringify(user));
    this.userBehaviorSubject.next(user);
  }
}
