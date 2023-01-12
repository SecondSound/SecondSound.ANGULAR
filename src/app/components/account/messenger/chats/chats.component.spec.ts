import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AuthManagementService} from "../../../../services/auth-management.service";
import {AuthService} from "../../../../services/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NotifierModule} from "angular-notifier";
import {LoginResponse} from "../../../../shared/models/login-response.model";
import {ChatDto} from "../../../../shared/models/ChatDto";
import {UserDto} from "../../../../shared/models/UserDto";
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";
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


      let advertisement :AdvertisementDto ={
        id: 1,
        title: 'instrument',
        description: 'test description',
        price: '200.00',
        imgFile: 'https://www.testimage2.com',
        seller: null,
        subCategory: null,
        saved: false
      }

      let sender : UserDto = {
         id: 1,
         firstName: "henk",
         lastName: "peters",
         street: "wilgenlaan",
         imgFile: "geen",
         houseNumber: 1,
         postalCode: "4872ee",
         city: "breda",
         country: "nederland",
         phoneNumber: "0654345678",
         iban: "blah",
         email: "henk@henk.com"
      }

       let receiver : UserDto = {
               id: 2,
               firstName: "piet",
               lastName: "peters",
               street: "wilgjeslaan",
               imgFile: "none",
               houseNumber: 2,
               postalCode: "3748kk",
               city: "etten-leur",
               country: "nederland",
               phoneNumber: "0654190678",
               iban: "blah",
               email: "piet@henk.com"
            }

      let chat: ChatDto =
        {
          id: 1,
          advertisement: advertisement,
          sender: sender,
          receiver: receiver
        }

      console.log(chat);
      let chats : ChatDto[] = [];

      chats.push(chat);

      component.chats = chats;
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.textContent).toContain('piet');
    });
});

