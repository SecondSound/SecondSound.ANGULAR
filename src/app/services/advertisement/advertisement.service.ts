import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AdvertisementDto} from "../../shared/models/AdvertisementDto";
import {FormArray, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Category} from "../../shared/models/Category";
import {SubCategory} from "../../shared/models/SubCategory";
import {BidDto} from "../../shared/models/BidDto";
import {Bid} from "../../shared/models/Bid";
import {SellerBidderDto} from "../../shared/models/SellerBidderDto";
import {NotifierService} from "angular-notifier";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION
  subCategoriesSelected = new EventEmitter<FormArray>();

  constructor(private http: HttpClient,
              private router: Router,
              private notifierService: NotifierService
  ) {
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
          .subscribe(() => {
          this.notifierService.notify('success', 'Advertisement created!');
        });
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

  public getAdvertisement(id: number) : Observable<AdvertisementDto>{
    return this.http.get<AdvertisementDto>(this.baseUrl + "/api/" + this.apiVersion + "/public/advertisement/" + id);
  }

  public getSavedAdvertisements(): Observable<AdvertisementDto[]> {
    return this.http.get<AdvertisementDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/advertisement/saved")
  }

  public saveAdvertisement(advertisementId: Number) : Observable<boolean>{
    return this.http.post<boolean>(this.baseUrl + "/api/" + this.apiVersion + "/advertisement/saved", advertisementId);
  }

  public getBids(advertisementId: Number) : Observable<BidDto[]> {
    return this.http.get<BidDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/public/bids/" + advertisementId);
  }

  public postBid(amount: string, advertisementId: number) {
    const data = {
      amount: amount,
      advertisementId: advertisementId
    };
    this.http.post<Bid>(this.baseUrl + "/api/" + this.apiVersion + "/bids", data).subscribe()
  }

  public deleteBid(id: Number) {
    this.http.delete<Number>(this.baseUrl + "/api/" + this.apiVersion + "/bids/" + id).subscribe();
  }

  public getSeller(id: Number) : Observable<SellerBidderDto> {
    return this.http.get<SellerBidderDto>(this.baseUrl + "/api/" + this.apiVersion + "/public/advertisement/seller/" + id);
  }

  public getLatLong(seller: SellerBidderDto): Observable<any> {
    return this.http.get<any>("https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + seller.street + " " + seller.city);
  }

  public getUserAdvertisements(): Observable<AdvertisementDto[]> {
    return this.http.get<AdvertisementDto[]>(this.baseUrl + "/api/" + this.apiVersion + "/user/advertisement");
  }
}



