import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidElementComponent } from './bid-element.component';

describe('BidElementComponent', () => {
  let component: BidElementComponent;
  let fixture: ComponentFixture<BidElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
