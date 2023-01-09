import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementDetailsComponent } from './advertisement-details.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {NotifierModule} from "angular-notifier";

describe('AdvertisementDetailsComponent', () => {
  let component: AdvertisementDetailsComponent;
  let fixture: ComponentFixture<AdvertisementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        NotifierModule
      ],
      declarations: [ AdvertisementDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
