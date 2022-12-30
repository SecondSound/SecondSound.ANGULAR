import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHorizontalCardComponent } from './ad-horizontal-card.component';

describe('AdHorizontalCardComponent', () => {
  let component: AdHorizontalCardComponent;
  let fixture: ComponentFixture<AdHorizontalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHorizontalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdHorizontalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
