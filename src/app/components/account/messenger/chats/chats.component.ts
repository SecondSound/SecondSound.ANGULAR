import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../../../services/chat/chat.service";
import {ChatDto} from "../../../../shared/models/ChatDto";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  public chats: ChatDto[];
  public NoChatsFound: Boolean = false;

  constructor(private chatService: ChatService) {
   this.getAllChats();
  }

  update() {
    setTimeout(() => this.getAllChats(), 500)
  }

  ngOnInit(): void {
  }

  private getAllChats() {

    this.chatService.getAllChats().subscribe(data => { this.chats = data });

  }


  ngAfterViewInit() {
    this.update()
  }
}








