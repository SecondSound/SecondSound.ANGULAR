import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerElementComponent } from './seller-element.component';
import {HttpClientModule} from "@angular/common/http";
import {NotifierModule} from "angular-notifier";

describe('SellerElementComponent', () => {
  let component: SellerElementComponent;
  let fixture: ComponentFixture<SellerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, NotifierModule],
      declarations: [ SellerElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
