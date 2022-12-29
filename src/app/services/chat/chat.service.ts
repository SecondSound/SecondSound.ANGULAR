import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

import {Observable} from "rxjs";
import {AdvertisementDto} from "../../shared/models/AdvertisementDto";
import {ChatDto} from "../../shared/models/ChatDto";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public getAllChats() {
    return this.http.get<ChatDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/chat");
  }

  public newChat(id: number){

    const data = {
          id: id
        };

   return this.http.post<string>(this.baseUrl + "/api/" + this.apiVersion + "/chat/create/" + id, data, {responseType: 'text' as 'json'}).subscribe(data => {
      this.router.navigate([this.baseUrl + "/api/" + this.apiVersion + "/chat-screen/" + data])});

  }




}


