import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MessageDto} from "../../../../shared/models/MessageDto";
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";
import {SellerBidderDto} from "../../../../shared/models/SellerBidderDto";
import {BidDto} from "../../../../shared/models/BidDto";
import {UserDto} from "../../../../shared/models/UserDto";
import {ChatDto} from "../../../../shared/models/ChatDto";
import {MessageService} from "../../../../services/message/Message.service";
import {AdvertisementService} from "../../../../services/advertisement/advertisement.service";
import {ChatService} from "../../../../services/chat/chat.service";
import {AuthManagementService} from "../../../../services/auth-management.service";
import {LoginResponse} from "../../../../shared/models/login-response.model";


@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements OnInit {
  messageForm: FormGroup
  chatId: {id: number};
  public messages: MessageDto[];
  error = null;
  authorized = true;
  advertisement: AdvertisementDto = null;
  bids: BidDto[] = [];
  seller: SellerBidderDto;
  user: LoginResponse;
  chat: ChatDto;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private messageService: MessageService,
              private chatService: ChatService,
              private advertisementService: AdvertisementService,
              private authManagementService: AuthManagementService) {}

    ngOnInit(): void {



    this.messageForm = this.fb.group({
          message: ['', Validators.required],
          })



    this.chatId = {
          id: this.route.snapshot.params['id']
    };

            this.authManagementService.user$.subscribe((user: LoginResponse) => {
            this.user = user;
          });

         this.chatService.getChatById(this.chatId.id).subscribe(chat => {
           this.chat = chat;
           this.advertisement = chat.advertisement;
           this.seller = chat.advertisement.seller;
           this.advertisementService.getBids(chat.advertisement.id)
                      .subscribe(data => {
                        this.bids = data;
                      })
           if ((this.chat.sender.id != this.user.userId) && (this.chat.receiver.id != this.user.userId) ){
             this.authorized = false;
           }
         });

    this.messageService.getMessagesByChatId(this.chatId.id)
          .subscribe(data => {
            this.messages = data; }, error => {this.error = error; })
      }

    sendMessage() : void{

      let message = this.messageForm.get('message').value.toString()

      this.messageService.postByChatMessage(message, this.chatId.id)
      window.location.reload();
    }

}

