import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MessageDto} from "../../../../shared/models/MessageDto";
import {MessageService} from "../../../../services/message/Message.service";

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements OnInit {
  chatId: {id: number};
  public messages: MessageDto[];
  error = null;

  constructor(private route: ActivatedRoute, private messageService: MessageService) {}

    ngOnInit(): void {
    this.chatId = {
          id: this.route.snapshot.params['id']
    };
    this.messageService.getMessagesByChatId(this.chatId.id)
          .subscribe(data => {
            this.messages = data; }, error => {this.error = error; })

      }



}

