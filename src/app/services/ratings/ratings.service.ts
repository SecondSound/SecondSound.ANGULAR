import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {Observable} from "rxjs";
import {Rating} from "../../shared/models/rating.model";

@Injectable({
  providedIn: 'root'
})
export class RatingsService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION
  private defaultConfig = {
    withCredentials: true,
    headers: {},
    params: {}
  };

  constructor(
    private http: HttpClient
  ) {
  }

  public getUserRatings(): Observable<Rating[]> {
    return this.http.get<Rating[]>(this.baseUrl + "/api/" + this.apiVersion + "/rating", this.defaultConfig);
  }

  public updateRating(rating: Rating): Observable<Rating> {
    return this.http.put<Rating>(this.baseUrl + "/api/" + this.apiVersion + "/rating/" + rating.id, rating, this.defaultConfig);
  }

  public deleteRating(rating: Rating): Observable<String> {
    return this.http.delete<String>(this.baseUrl + "/api/" + this.apiVersion + "/rating/" + rating.id, this.defaultConfig);
  }

  public postRating(rating: any): Observable<Rating> {
    return this.http.post<Rating>(this.baseUrl + "/api/" + this.apiVersion + "/rating", rating, this.defaultConfig);
  }
}
