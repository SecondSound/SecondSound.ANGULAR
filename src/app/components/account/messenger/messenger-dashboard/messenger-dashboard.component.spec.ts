import { MessengerDashboardComponent } from './messenger-Dashboard.component';
import {NotifierModule} from "angular-notifier";
import {AuthManagementService} from "../../../../services/auth-management.service";
import {AuthService} from "../../../../services/auth.service";
import {ChatService} from "../../../../services/chat/chat.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';

describe('MessengerDashboardComponent', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let chatService: ChatService;
  let component: MessengerDashboardComponent;
  let fixture: ComponentFixture<MessengerDashboardComponent>;

  beforeEach(async () => {

     let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);

    await TestBed.configureTestingModule({
    imports: [
            RouterTestingModule,
            FormsModule,
            ReactiveFormsModule,
            NotifierModule,
            HttpClientTestingModule,
            CommonModule
          ],
     declarations: [ MessengerDashboardComponent ],
     providers: [
       AuthManagementService,
       AuthService
     ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

      chatService = TestBed.inject(ChatService);
      httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });


  it('should create the messengerDashboardComponent', () => {
      let fixture: ComponentFixture<MessengerDashboardComponent> = TestBed.createComponent(MessengerDashboardComponent);
      let component: MessengerDashboardComponent = fixture.componentInstance;

      fixture.detectChanges();
      expect(component).toBeTruthy();
    });


  it('should create the messengerDashboardComponent adds button', () => {
      let fixture: ComponentFixture<MessengerDashboardComponent> = TestBed.createComponent(MessengerDashboardComponent);
      let component: MessengerDashboardComponent = fixture.componentInstance;

      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.textContent).toContain('Adds');
    });

});



