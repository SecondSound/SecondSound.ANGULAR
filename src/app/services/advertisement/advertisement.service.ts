import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {AdvertisementModel} from "../../shared/models/advertisementModel.model";
import {AdvertisementDto} from "../../shared/models/advertisementDto.model";
import {LoginResponse} from "../../shared/models/login-response.model";
import {FormGroup} from "@angular/forms";



@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION



  constructor(private http: HttpClient) {
  }

  public getAllAdvertisements(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/" + this.apiVersion + "/public/advertisement");
  }

  // public postAdvertisement(advertisement: AdvertisementModel) {
  //
  //   console.log("START")
  //   return this.http.post(this.baseUrl + "/api/" + this.apiVersion + "/advertisement", advertisement)
  //     .pipe(
  //       map(responseData => {
  //       const postsArray = [];
  //       for (const key in responseData) {
  //         if (responseData.hasOwnProperty(key)) {
  //           postsArray.push({...responseData[key], id: key});
  //         }
  //       } return postsArray
  //     })
  //   )
  //   .subscribe(posts => {
  //     console.log(posts)
  //   });
  // }

  public postAdvertisement(advertisementForm: FormGroup, file: FormData) {

    console.log(file)
    const data = {advertisementData: {title: advertisementForm.get('title').value, description: advertisementForm.get('description').value, price: advertisementForm.get('price').value}};

    console.log(data)

    return this.http.post(this.baseUrl + "/api/" + this.apiVersion + "/advertisement", advertisementForm.value, {params: {file: file}})
  }
}



