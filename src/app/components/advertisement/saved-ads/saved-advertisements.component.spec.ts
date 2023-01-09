import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedAdvertisementsComponent } from './saved-advertisements.component';
import {HttpClientModule} from "@angular/common/http";
import {NotifierModule} from "angular-notifier";
import {AuthManagementService} from "../../../services/auth-management.service";
import {AuthService} from "../../../services/auth.service";

describe('SavedAdvertisementsComponent', () => {
  let component: SavedAdvertisementsComponent;
  let fixture: ComponentFixture<SavedAdvertisementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, NotifierModule, AuthService],
      providers: [AuthManagementService ],
      declarations: [ SavedAdvertisementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
