import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAdvertisementsComponent } from './selected-advertisements.component';

describe('SelectedAdvertisementsComponent', () => {
  let component: SelectedAdvertisementsComponent;
  let fixture: ComponentFixture<SelectedAdvertisementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
