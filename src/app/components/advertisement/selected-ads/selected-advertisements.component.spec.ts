import {TestBed} from "@angular/core/testing";
import {AppComponent} from "../../../app.component";
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {SelectedAdvertisementsComponent} from "./selected-advertisements.component";
import {HttpClientModule} from "@angular/common/http";
import {NotifierModule} from "angular-notifier";
import {AuthManagementService} from "../../../services/auth-management.service";
import {AuthService} from "../../../services/auth.service";

describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, NotifierModule],
      providers: [AuthManagementService, AuthService],
      declarations: [SelectedAdvertisementsComponent]
    });
    fixture = TestBed.createComponent(SelectedAdvertisementsComponent);
    app = fixture.componentInstance;
  });

  it ("should create the component", () => {
    expect(app).toBeTruthy();
  })

});
