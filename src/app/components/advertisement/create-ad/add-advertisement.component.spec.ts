import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertisementComponent } from './add-advertisement.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {NotifierModule, NotifierService} from "angular-notifier";

describe('AddAdvertisementComponent', () => {
  let component: AddAdvertisementComponent;
  let fixture: ComponentFixture<AddAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NotifierModule
      ],
      declarations: [ AddAdvertisementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
