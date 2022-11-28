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

  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  nameFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);

  matcher: RegisterErrorStateMatcher = new RegisterErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

  displayPassword() {
    this.hide = !this.hide;
  }
}
