import {LoginComponent} from "./login.component";
import {ComponentFixture, getTestBed, TestBed, waitForAsync} from "@angular/core/testing";
import {AuthManagementService} from "../../../services/auth-management.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NotifierModule} from "angular-notifier";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import * as http from "http";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let backend: HttpClientTestingModule
  let service: AuthManagementService;
  let router: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        NotifierModule
      ],
      providers: [
        {
          provide: RouterModule,
          useClass: class {
            navigate = jasmine.createSpy("navigate");
          }
        },
        AuthManagementService,
        AuthService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();

    backend = TestBed.inject(HttpClientTestingModule);
    service = TestBed.inject(AuthManagementService);
    router = TestBed.inject(Router);


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display form', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should prevent submission with invalid input', () => {
    component.ngOnInit();

    component.emailFormControl.setValue('bart.grootoonk@email.com');
    component.passwordFormControl.setValue('');

    expect(component.getFormState()).toBeFalsy();
  });

  it('should submit with valid input', () => {
    component.ngOnInit();
    component.emailFormControl.setValue('bart.grootoonk@email.com');
    component.passwordFormControl.setValue('password123');
    expect(component.getFormState()).toBeTruthy();
  });

});
