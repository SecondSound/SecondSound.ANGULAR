import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRegistrationComponent } from './confirm-registration.component';
import {AuthManagementService} from "../../../../services/auth-management.service";
import {AuthService} from "../../../../services/auth.service";
import {HttpClientModule} from "@angular/common/http";

describe('ConfirmRegistrationComponent', () => {
  let component: ConfirmRegistrationComponent;
  let fixture: ComponentFixture<ConfirmRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ConfirmRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
