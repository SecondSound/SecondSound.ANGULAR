import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCardComponent } from './ad-card.component';
import {HttpClientModule} from "@angular/common/http";
import {NotifierModule, NotifierService} from "angular-notifier";
import {AuthManagementService} from "../../../../services/auth-management.service";
import {NotifierQueueService} from "angular-notifier/lib/services/notifier-queue.service";
import {AuthService} from "../../../../services/auth.service";

describe('AdCardComponent', () => {
  let component: AdCardComponent;
  let fixture: ComponentFixture<AdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NotifierModule
      ],
      providers: [AuthService, AuthManagementService ],
      declarations: [ AdCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
