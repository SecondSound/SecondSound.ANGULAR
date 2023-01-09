import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BidElementComponent } from './bid-element.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {NotifierModule} from "angular-notifier";
import {AuthManagementService} from "../../../../services/auth-management.service";

describe('BidElementComponent', () => {
  let component: BidElementComponent;
  let fixture: ComponentFixture<BidElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule, HttpClientModule, NotifierModule, AuthManagementService],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      declarations: [ BidElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
