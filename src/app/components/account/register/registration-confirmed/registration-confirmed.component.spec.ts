import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationConfirmedComponent } from './registration-confirmed.component';

describe('RegistrationConfirmedComponent', () => {
  let component: RegistrationConfirmedComponent;
  let fixture: ComponentFixture<RegistrationConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationConfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});