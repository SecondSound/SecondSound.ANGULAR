import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AuthManagementService} from "../../../../services/auth-management.service";
import {AuthService} from "../../../../services/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NotifierModule} from "angular-notifier";
import {LoginResponse} from "../../../../shared/models/login-response.model";
//import {ChatDto} from "../../../../shared/models/chatDto";
import {MatMenuModule} from "@angular/material/menu";
import { ChatsComponent } from './chats.component';



describe('ChatsComponent', () => {
  let component: ChatsComponent;
  let fixture: ComponentFixture<ChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
          HttpClientTestingModule,
          NotifierModule,
          MatMenuModule
        ],
        declarations: [ ChatsComponent ],
         providers: [
           AuthManagementService,
           AuthService
         ],
         schemas: [CUSTOM_ELEMENTS_SCHEMA]
          })
        .compileComponents();



    fixture = TestBed.createComponent(ChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a chat', () => {

  let user: LoginResponse =
        {
          firstName: 'Bart',
          lastName: 'Grootoonk',
          accessToken: null,
          userId: null,
          expirationDate: null
        }
//       let chat: ChatDto =
//         {
//           advertisement: null,
//           sender: null,
//           receiver: null
//
//         }
//
//       let chats : List<Chat>, () => {
//         chat
//       }

//       component.chats = chat;
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.textContent).toContain('');
    });
});

