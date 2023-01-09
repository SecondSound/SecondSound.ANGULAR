import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidDialogComponent } from './bid-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

describe('BidDialogComponent', () => {
  let component: BidDialogComponent;
  let fixture: ComponentFixture<BidDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      declarations: [ BidDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
