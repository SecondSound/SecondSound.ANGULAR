import { ChatScreenComponent } from './chat-screen.component';
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

describe('ChatScreenComponent', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let chatService: ChatService;
  let component: ChatScreenComponent;
  let fixture: ComponentFixture<ChatScreenComponent>;

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
     declarations: [ ChatScreenComponent ],
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


  it('should create the chatScreenComponent', () => {
      let fixture: ComponentFixture<ChatScreenComponent> = TestBed.createComponent(ChatScreenComponent);
      let component: ChatScreenComponent = fixture.componentInstance;

      fixture.detectChanges();
      expect(component).toBeTruthy();
    });


});






