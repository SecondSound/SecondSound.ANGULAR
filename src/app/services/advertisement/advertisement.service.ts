import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AdvertisementDto} from "../../shared/models/advertisementDto.model";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {HomeComponent} from "../../components/home/home/home.component";



@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public getAllAdvertisements() {
    return this.http.get(this.baseUrl + "/api/" + this.apiVersion + "/public/advertisement");
  }

  public postAdvertisement(advertisementForm: FormGroup, price: string, file: FormData) {

    let advertisementId: Number
    const data = {title: advertisementForm.get('title').value, description: advertisementForm.get('description').value, price: price};
    this.http.post<AdvertisementDto>(this.baseUrl + "/api/" + this.apiVersion + "/advertisement", data)
      .subscribe((response) => {
        advertisementId = response.id;
        this.http.post<String>(this.baseUrl + "/api/" + this.apiVersion + "/resource/advertisement/"+advertisementId, file, {responseType: 'text' as 'json'})
          .subscribe()
      });

    return this.router.navigate([''])
  }

}



