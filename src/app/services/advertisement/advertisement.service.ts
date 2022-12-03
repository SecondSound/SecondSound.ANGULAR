import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FormGroup} from "@angular/forms";
import {AdvertisementModel} from "../../shared/models/advertisement-model.model";
import {AppFunctions} from "../../shared/app-functions";


@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION
  private advertisement: AdvertisementModel;

  constructor(private http: HttpClient,
              private appFunctions: AppFunctions) {
  }

  public getAllAdvertisements() {
    return this.http.get(this.baseUrl + "/api/" + this.apiVersion + "/public/advertisement");
  }

public postAdvertisement(myForm: FormGroup) {
  this.advertisement.title = myForm.get('title').value;
  this.advertisement.description = myForm.get('description').value;
  this.advertisement.price = Number(this.appFunctions.transformToCurrency(myForm.get('price').value))

  console.log("1: " + this.advertisement.title + " 2: " + this.advertisement.description + " 3: "  + this.advertisement.price)


}


}



