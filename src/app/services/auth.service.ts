import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginCredentials} from "../shared/models/login-credentials.model";
import {LoginResponse} from "../shared/models/login-response.model";

@Injectable()
export class AuthService {
  private baseUrl = environment.BASE_URL;
  private apiVersion = environment.API_VERSION
  private defaultConfig = {
    withCredentials: true,
    headers: {},
    params: {
    }
  };

  constructor(private http: HttpClient) {
  }

  public postLogin(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + "/api/" + this.apiVersion + "/auth/login", credentials, this.defaultConfig);
  }
}
