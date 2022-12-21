import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

import {Observable} from "rxjs";
import {AdvertisementDto} from "../../shared/models/AdvertisementDto";
import {MessageDto} from "../../shared/models/MessageDto";


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION

  constructor(private http: HttpClient) { }

  public getAllMessages() {
      return this.http.get<MessageDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/public/message");
    }

  public getMessagesByChatId(id: number) {
      return this.http.get<MessageDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/public/message/" + id);
    }

}
