import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AdvertisementDto} from "../../shared/models/AdvertisementDto";
import {MessageDto} from "../../shared/models/MessageDto";


@Injectable({
  providedIn: 'root'
})
export class MessageService {


  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION

  constructor(private http: HttpClient,
              private router: Router) { }

  public getAllMessages() {
      return this.http.get<MessageDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/public/message");
    }

  public getMessagesByChatId(id: number) {
  if (this.http.get<MessageDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/public/message/" + id) == null)
      { return null;}

    return this.http.get<MessageDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/public/message/" + id);
    }

  public postByChatMessage(message: string, id: number) {

      const data = {chatId: id, message: message};
      this.http.post<String>(this.baseUrl + "/api/" + this.apiVersion + "/message", data, {responseType: 'text' as 'json'}).subscribe();

    }

}
