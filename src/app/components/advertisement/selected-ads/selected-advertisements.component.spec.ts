import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAdvertisementsComponent } from './selected-advertisements.component';
import {HttpClientModule} from "@angular/common/http";
import {NotifierModule} from "angular-notifier";
import {AuthManagementService} from "../../../services/auth-management.service";

describe('SelectedAdvertisementsComponent', () => {
  let component: SelectedAdvertisementsComponent;
  let fixture: ComponentFixture<SelectedAdvertisementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, NotifierModule, AuthManagementService],
      declarations: [ SelectedAdvertisementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
