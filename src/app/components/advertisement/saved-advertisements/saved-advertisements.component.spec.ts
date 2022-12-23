import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAdvertisementsComponent } from './saved-advertisements.component';

describe('SavedAdvertisementsComponent', () => {
  let component: SavedAdvertisementsComponent;
  let fixture: ComponentFixture<SavedAdvertisementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
