import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerDashboardComponent } from './messenger-dashboard.component';

describe('MessengerDashboardComponent', () => {
  let component: MessengerDashboardComponent;
  let fixture: ComponentFixture<MessengerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessengerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
