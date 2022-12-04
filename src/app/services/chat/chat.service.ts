import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AdvertisementModel} from "../../shared/models/advertisement-model.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION

  constructor(private http: HttpClient) {
  }

  public getAllChats() {
    let userID = "test"
    return this.http.get(this.baseUrl + "/api/" + this.apiVersion + "/public/chat");
  }


}


