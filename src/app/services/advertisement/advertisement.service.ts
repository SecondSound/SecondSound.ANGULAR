import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FormGroup} from "@angular/forms";

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

  // public postAdvertisement(myForm: FormGroup){
  //   console.log("De titel is: " + myForm.get('title').value + " en de prijs is: " + myForm.get('price').value)
  //
  // }
}


// public postAdvertisement(myForm: FormGroup) {
//   this.advertisement.title = myForm.get('title').value;
//   this.advertisement.description = myForm.get('description').value;
//   this.advertisement.price = Number(this.appComponent.transformToCurrency(myForm.get('price').value))
//
//   console.log("1: " + this.advertisement.title + " 2: " + this.advertisement.description + " 3: "  + this.advertisement.price)
//
//
// }
