import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementElementComponent } from './advertisement-element.component';

describe('AdvertisementElementComponent', () => {
  let component: AdvertisementElementComponent;
  let fixture: ComponentFixture<AdvertisementElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
