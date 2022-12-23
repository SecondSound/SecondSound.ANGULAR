import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AdvertisementDto} from "../../shared/models/AdvertisementDto";
import {FormArray, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Category} from "../../shared/models/Category";
import {SubCategory} from "../../shared/models/SubCategory";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION
  subCategoriesSelected = new EventEmitter<FormArray>();

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public getAllAdvertisements(isLoggedIn: boolean): Observable<AdvertisementDto[]> {

    if (isLoggedIn == true) {
      return this.http.get<AdvertisementDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/advertisement")
    } else {
      return this.http.get<AdvertisementDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/public/advertisement")
    }

  }

  public postAdvertisement(advertisementForm: FormGroup, price: string, file: FormData, subcategoryId: Number) {

    let advertisementId: Number
    const data = {
      title: advertisementForm.get('title').value,
      description: advertisementForm.get('description').value,
      price: price,
      subCategoryId: subcategoryId
    };
    this.http.post<AdvertisementDto>(this.baseUrl + "/api/" + this.apiVersion + "/advertisement", data)
      .subscribe((response) => {
        advertisementId = response.id;
        this.http.post<String>(this.baseUrl + "/api/" + this.apiVersion + "/resource/advertisement/" + advertisementId, file, {responseType: 'text' as 'json'})
          .subscribe()
      });

    return this.router.navigate([''])
  }

  public getCategories() {
    return this.http.get(this.baseUrl + "/api/" + this.apiVersion + "/public/categories");
  }

  public getCategoryDto(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + "/api/" + this.apiVersion + "/public/categories/dto");
  }

  public getSubCategories(id: Number) {

    const data = {id: id};

    return this.http.get(this.baseUrl + "/api/" + this.apiVersion + "/public/subcategories/" + id);
  }

  public getAdvertisement(id: number) {
    return this.http.get(this.baseUrl + "/api/" + this.apiVersion + "/public/advertisement/" + id);
  }

  public getSavedAdvertisements(): Observable<AdvertisementDto[]> {
    return this.http.get<AdvertisementDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/advertisement/saved")
  }

  public saveAdvertisement(advertisementId: Number) : Observable<boolean>{
    return this.http.post<boolean>(this.baseUrl + "/api/" + this.apiVersion + "/advertisement/saved", advertisementId);
  }
}



