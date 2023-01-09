import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAdvertisementsComponent } from './user-advertisements.component';
import { HttpClientModule } from "@angular/common/http";
import {NotifierModule, NotifierService} from "angular-notifier";
import {AuthManagementService} from "../../../../services/auth-management.service";
import {AuthService} from "../../../../services/auth.service";
import { CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('UserAdvertisementsComponent', () => {
  let component: UserAdvertisementsComponent;
  let fixture: ComponentFixture<UserAdvertisementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NotifierModule
      ],
      declarations: [ UserAdvertisementsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdvertisementsComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
