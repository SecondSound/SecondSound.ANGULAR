import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementDialogComponent } from './advertisement-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

describe('AdvertisementDialogComponent', () => {
  let component: AdvertisementDialogComponent;
  let fixture: ComponentFixture<AdvertisementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
        ],
      declarations: [ AdvertisementDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
