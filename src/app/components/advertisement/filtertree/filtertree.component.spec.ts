import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltertreeComponent } from './filtertree.component';

describe('FiltertreeComponent', () => {
  let component: FiltertreeComponent;
  let fixture: ComponentFixture<FiltertreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltertreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltertreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
