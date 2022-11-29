import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginResponse} from "../shared/models/login-response.model";
import {LoginCredentials} from "../shared/models/login-credentials.model";
import {Router} from "@angular/router";
import * as moment from "moment";

@Injectable()
export class AuthManagementService {
  private tokenKey: string = environment.JWT_TOKEN_KEY;

  private user: BehaviorSubject<LoginResponse> = new BehaviorSubject<LoginResponse>({
    firstName: '',
    lastName: '',
    accessToken: '',
    userId: 0,
    expirationDate: '',
  });
  user$: Observable<LoginResponse> = this.user.asObservable();

  constructor(private authService: AuthService, private router: Router) {}

  logInUser(credentials: LoginCredentials) {

    this.authService.postLogin(credentials).subscribe( (response) => {
      this.storeLoggedInUser(response);
      this.user.next(response);
      this.router.navigate(['user']);
    });
  }

  storeLoggedInUser(user: LoginResponse) {
    localStorage.setItem(this.tokenKey, JSON.stringify(user));
    this.user.next(user);
  }

  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem(this.tokenKey) as string);

    if (user && user.expirationDate) {
      const expirationDate = moment(user.expirationDate);

      if (expirationDate.isAfter(moment.now())) {
        return true
      }
    }

    return false;
  }
}
