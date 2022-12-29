import { Component, OnInit } from '@angular/core';
import {Register} from "../../../../shared/models/register.model";
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {FormErrorStateMatcher} from "../../../../shared/error-state-matcher/FormErrorStateMatcher";
import {AuthManagementService} from "../../../../services/auth-management.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  hide: boolean = true;
  registrationStarted: boolean = false;
  passwordsMatch: boolean = false;
  minLengthPassword: number = 8;
  minLengthName: number = 3;
  maxLengthFirstName: number = 50;
  maxLengthLastName: number = 80;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  firstName: string = '';
  lastName: string = '';

  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.minLengthPassword)]);
  passwordConfirmFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.minLengthPassword)]);
  firstNameFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.minLengthName), Validators.maxLength(this.maxLengthFirstName)]);
  lastNameFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.minLengthName), Validators.maxLength(this.maxLengthLastName)]);

  matcher: FormErrorStateMatcher = new FormErrorStateMatcher();

  constructor(private authManagementService: AuthManagementService) { }

  ngOnInit(): void {
  }

  displayPassword() {
    this.hide = !this.hide;
  }

  registerUser() {
    const registerUser: Register = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }

    this.authManagementService.registerUser(registerUser);
    this.registrationStarted = true;
  }

  getFormState(): boolean {
    return this.firstNameFormControl.valid && this.lastNameFormControl.valid &&
      this.emailFormControl.valid && this.passwordFormControl.valid && this.passwordsMatch;
  }

  matchPasswordsValidator(): void {
    if (this.passwordConfirmFormControl.hasError('passwordsDontMatch')) {
      this.passwordConfirmFormControl.setErrors({'passwordsDontMatch': false})
      this.passwordConfirmFormControl.updateValueAndValidity();
    }

    this.passwordsMatch = this.password === this.confirmPassword;
    let errors:ValidationErrors = this.passwordConfirmFormControl.errors;

    if (!this.passwordsMatch)
      if (errors) {
        errors['passwordsDontMatch'] = true;
      } else {
        errors = {'passwordsDontMatch': true};
    }

    this.passwordConfirmFormControl.setErrors(errors);
  }
}
