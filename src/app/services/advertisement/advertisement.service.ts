import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AdvertisementModel} from "../../shared/models/advertisement-model.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION

  constructor(private http: HttpClient) {
  }

  public getAllAdvertisements() {
    return this.http.get(this.baseUrl + "/api/" + this.apiVersion + "/public/advertisement");
  }

  public postAdvertisement(advertisement: AdvertisementModel) : Observable<any>{

    console.log(advertisement.title, advertisement.description, advertisement.price)
    return this.http.post(this.baseUrl + "/api/" + this.apiVersion + "/advertisement", advertisement);
  }


}



