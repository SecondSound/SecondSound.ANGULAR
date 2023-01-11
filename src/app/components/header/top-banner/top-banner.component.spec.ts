import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {TopBannerComponent} from "./top-banner.component";
import {AuthManagementService} from "../../../services/auth-management.service";
import {AuthService} from "../../../services/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NotifierModule} from "angular-notifier";
import {LoginResponse} from "../../../shared/models/login-response.model";
import {MatMenuModule} from "@angular/material/menu";

describe('TopBannerComponent', () => {
  let component: TopBannerComponent;
  let fixture: ComponentFixture<TopBannerComponent>;

  beforeEach(  () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NotifierModule,
        MatMenuModule
      ],
      declarations: [
        TopBannerComponent
      ],
      providers: [
        AuthManagementService,
        AuthService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(TopBannerComponent);
    component = fixture.debugElement.componentInstance;

  });


  it('should create the TopBannerComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should show "Log in" if not logged in', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Log in');
  });

  it('should show the users firstName and lastName if logged in', () => {
    let user: LoginResponse =
      {
        firstName: 'Bart',
        lastName: 'Grootoonk',
        accessToken: null,
        userId: null,
        expirationDate: null
      }

    component.isLoggedIn = true;
    component.user = user;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Bart Grootoonk');
  });
})
