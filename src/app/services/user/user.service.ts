import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../shared/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION
  private defaultConfig = {
    withCredentials: true,
    headers: {},
    params: {}
  };

  constructor(private http: HttpClient) {
  }

  public getUser(): Observable<User> {
    return this.http.get<User>(this.baseUrl + "/api/" + this.apiVersion + "/user/", this.defaultConfig);
  }

  public putUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + "/api/" + this.apiVersion + "/user/", user, this.defaultConfig);
  }
}
