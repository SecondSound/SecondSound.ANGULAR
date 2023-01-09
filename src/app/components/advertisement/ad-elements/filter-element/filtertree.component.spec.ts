import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltertreeComponent } from './filtertree.component';
import {HttpClientModule} from "@angular/common/http";
import {NotifierModule, NotifierService} from "angular-notifier";

describe('FiltertreeComponent', () => {
  let component: FiltertreeComponent;
  let fixture: ComponentFixture<FiltertreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NotifierModule
      ],
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
