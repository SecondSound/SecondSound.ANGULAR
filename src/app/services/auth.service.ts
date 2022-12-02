import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginCredentials} from "../shared/models/login-credentials.model";
import {LoginResponse} from "../shared/models/login-response.model";
import {Register} from "../shared/models/register.model";

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
    return this.http.post<LoginResponse>(
      this.baseUrl + "/api/" + this.apiVersion + "/auth/login",
      credentials,
      this.defaultConfig
    );
  }

  public postRegisterUser(user: Register): Observable<string> {
    return this.http.post<string>(
      this.baseUrl + "/api/" + this.apiVersion + "/auth/register",
      user,
      this.defaultConfig
    );
  }

  public getConfirmRegistration(token: string): Observable<string> {
    const config  = Object.assign({}, this.defaultConfig);
    config.params = {
      "token" : token
    };
    return this.http.get<string>(this.baseUrl + "/api/" + this.apiVersion + "/auth/register/confirm", config);
  }


}
