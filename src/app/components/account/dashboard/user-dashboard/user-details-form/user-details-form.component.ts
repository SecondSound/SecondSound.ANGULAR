import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {FormErrorStateMatcher} from "../../../../../shared/error-state-matcher/FormErrorStateMatcher";
import {AdvertisementDto} from "../../../../../shared/models/AdvertisementDto";
import {User} from "../../../../../shared/models/user.model";
import {UserService} from "../../../../../services/user/user.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent implements OnInit {
  @Input() user: User;

  editDetails: boolean = false;
  email: string = '';
  firstName: string = '';
  lastName: string = '';

  firstNameFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]);
  lastNameFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]);
  streetFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]);
  houseNumberFormControl: FormControl = new FormControl('', [Validators.required, Validators.maxLength(8)]);
  cityFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]);
  countryFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]);
  phoneNumberFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]);
  ibanFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^([A-Z*]{2}[ '+'\\'+'-]?[0-9*]{2})(?=(?:[ '+'\\'+'-]?[A-Z0-9*]){9,30}$)((?:[ '+'\\'+'-]?[A-Z0-9*]{3,5}){2,7})([ '+'\\'+'-]?[A-Z0-9*]{1,3})?$')]);
  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher: FormErrorStateMatcher = new FormErrorStateMatcher();

  constructor(private userService: UserService, private notifierService: NotifierService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.firstNameFormControl.updateValueAndValidity();
    this.lastNameFormControl.updateValueAndValidity();
    this.streetFormControl.updateValueAndValidity();
    this.houseNumberFormControl.updateValueAndValidity();
    this.cityFormControl.updateValueAndValidity();
    this.countryFormControl.updateValueAndValidity();
    this.phoneNumberFormControl.updateValueAndValidity();
    this.ibanFormControl.updateValueAndValidity();
    this.emailFormControl.updateValueAndValidity();
  }

  getFormState(): boolean {
    return this.firstNameFormControl.valid && this.lastNameFormControl.valid && this.streetFormControl.valid
      && this.houseNumberFormControl.valid && this.cityFormControl.valid && this.countryFormControl.valid
    && this.phoneNumberFormControl.valid && this.ibanFormControl.valid && this.emailFormControl.valid;
  }

  updateUser() {
    this.userService.putUser(this.user).subscribe(() => {
      this.notifierService.notify('success', 'Successfully updated details!');
    });
  }
}
