import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {LoginCredentials} from "../../../shared/models/login-credentials.model";
import {AuthManagementService} from "../../../services/auth-management.service";
import {FormErrorStateMatcher} from "../../../shared/error-state-matcher/FormErrorStateMatcher";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  minLengthPassword: number = 8;
  email: string = '';
  password: string = '';

  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.minLengthPassword)]);

  matcher: FormErrorStateMatcher = new FormErrorStateMatcher();

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

  getFormState(): boolean {
    return this.emailFormControl.valid && this.passwordFormControl.valid;
  }
}
