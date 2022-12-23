import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

import {Observable} from "rxjs";
import {AdvertisementDto} from "../../shared/models/AdvertisementDto";
import {ChatDto} from "../../shared/models/ChatDto";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION

  constructor(private http: HttpClient) {
  }

  public getAllChats() {
    return this.http.get<ChatDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/chat");
  }



}


