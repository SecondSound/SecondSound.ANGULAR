import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {LoginErrorStateMatcher} from "../login/login.component";

export class RegisterErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  minLengthPassword: number = 6;
  minLengthName: number = 3;
  maxLengthFirstName: number = 50;
  maxLengthLastName: number = 80;

  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.minLengthPassword)]);
  firstNameFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.minLengthName), Validators.maxLength(this.maxLengthFirstName)]);
  lastNameFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.minLengthName), Validators.maxLength(this.maxLengthLastName)]);

  matcher: RegisterErrorStateMatcher = new RegisterErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

  displayPassword() {
    this.hide = !this.hide;
  }
}
