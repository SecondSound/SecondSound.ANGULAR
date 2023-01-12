import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";
//import {environment} from "../../../../environments/environment";
import {ChatService} from "../../../../services/chat/chat.service";

@Component({
  selector: 'app-messenger-dashboard',
  templateUrl: './messenger-dashboard.component.html',
  styleUrls: ['./messenger-dashboard.component.css']
})
export class MessengerDashboardComponent implements OnInit {

  public chats: any;
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chats = this.chatService.getAllChats().subscribe(data => {this.chats = data; } )
  }

}
