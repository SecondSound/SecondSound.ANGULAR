import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdvertisementService} from "../../../../services/advertisement/advertisement.service";
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";
import {ChatService} from "../../../../services/chat/chat.service";

@Component({
  selector: 'app-advertisement-element',
  templateUrl: './advertisement-element.component.html',
  styleUrls: ['./advertisement-element.component.css']
})
export class AdvertisementElementComponent implements OnInit {

  @Input() advertisement: AdvertisementDto;


  constructor(private chatService: ChatService) { }



  ngOnInit(): void {
  }

  startChat(): void {
      // start a chat or open a chat when clicked
      this.chatService.newChat(this.advertisement.id)
  }

}
