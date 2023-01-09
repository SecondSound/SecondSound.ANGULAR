import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopBannerComponent } from './top-banner.component';
import {AuthManagementService} from "../../../services/auth-management.service";
import {AuthService} from "../../../services/auth.service";
import {HttpClientModule} from "@angular/common/http";


describe('TopBannerComponent', () => {
  let component: TopBannerComponent;
  let fixture: ComponentFixture<TopBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [AuthManagementService, AuthService, HttpClientModule ],
      declarations: [ TopBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
