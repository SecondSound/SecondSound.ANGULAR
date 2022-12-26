import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MessageDto} from "../../../../shared/models/MessageDto";
import {MessageService} from "../../../../services/message/Message.service";

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

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private messageService: MessageService) {}

    ngOnInit(): void {

    this.messageForm = this.fb.group({
          message: ['', Validators.required],
          })

    this.chatId = {
          id: this.route.snapshot.params['id']
    };
    this.messageService.getMessagesByChatId(this.chatId.id)
          .subscribe(data => {
            this.messages = data; }, error => {this.error = error; })
      }

    sendMessage() : void{

      let message = this.messageForm.get('message').value.toString()
      console.log(message)
      this.messageService.postByChatMessage(message, this.chatId.id)
window.location.reload();
    }

}

