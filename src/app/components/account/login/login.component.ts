import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

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

  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.minLengthPassword)]);

  matcher: LoginErrorStateMatcher = new LoginErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

  displayPassword() {
    this.hide = !this.hide;
  }
}
