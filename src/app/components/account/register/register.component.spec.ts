import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {RegisterComponent} from "./register.component";
import {AuthManagementService} from "../../../services/auth-management.service";
import {AuthService} from "../../../services/auth.service";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NotifierModule} from "angular-notifier";
import {ConfirmRegistrationComponent} from "./confirm-registration/confirm-registration.component";
import {RegistrationConfirmedComponent} from "./registration-confirmed/registration-confirmed.component";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('RegisterComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NotifierModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [RegisterComponent, RegisterFormComponent, RegistrationConfirmedComponent, ConfirmRegistrationComponent],
      providers: [AuthManagementService, AuthService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
  });

  it('should create the RegisterComponent', () => {
    let fixture: ComponentFixture<RegisterComponent> = TestBed.createComponent(RegisterComponent);
    let component: RegisterComponent = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('RegisterFormComponent', () => {
    let fixture: ComponentFixture<RegisterFormComponent>
    let component: RegisterFormComponent

    beforeEach(() => {
      fixture = TestBed.createComponent(RegisterFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })

    it('should create the RegisterFormComponent', () => {

      expect(component).toBeTruthy();
    });

    it('should check if the set passwords are same', () => {
      component.emailFormControl.setValue('bart.grootoonk@email.com');
      component.passwordFormControl.setValue('password123');
      component.passwordConfirmFormControl.setValue('password123');
      component.passwordsMatch = true;
      component.firstNameFormControl.setValue('Bart');
      component.lastNameFormControl.setValue('Grootoonk');

      expect(component.getFormState()).toBeTruthy();
    });

    it('should check if the set passwords are not same', () => {
      component.emailFormControl.setValue('bart.grootoonk@email.com');
      component.passwordFormControl.setValue('password123');
      component.passwordConfirmFormControl.setValue('password1234');
      component.passwordsMatch = false;
      component.firstNameFormControl.setValue('Bart');
      component.lastNameFormControl.setValue('Grootoonk');

      expect(component.getFormState()).toBeFalsy();
    });

  });

  describe('ConfirmRegistrationComponent', () => {
    let fixture: ComponentFixture<ConfirmRegistrationComponent>;
    let component: ConfirmRegistrationComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(ConfirmRegistrationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })

    it('should create the ConfirmRegistrationComponent', () => {
      expect(component).toBeTruthy();
    });

    it('should resend the confirmationToken', () => {
      component.resendMail()
      expect(component.mailString).toContain("resend mail clicked")
    });
  });

  describe('RegistrationConfirmedComponent', () => {
    let fixture: ComponentFixture<RegistrationConfirmedComponent>;
    let component: RegistrationConfirmedComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(RegistrationConfirmedComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })

    it('should create the RegistrationConfirmedComponent', () => {
      expect(component).toBeTruthy();
    });
  });

});
