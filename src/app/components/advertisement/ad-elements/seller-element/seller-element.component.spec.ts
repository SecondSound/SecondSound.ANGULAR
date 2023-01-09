import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerElementComponent } from './seller-element.component';

describe('SellerElementComponent', () => {
  let component: SellerElementComponent;
  let fixture: ComponentFixture<SellerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
