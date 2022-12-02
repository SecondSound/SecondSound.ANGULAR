import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginResponse} from "../shared/models/login-response.model";
import {LoginCredentials} from "../shared/models/login-credentials.model";
import {Router} from "@angular/router";
import * as moment from "moment";
import {Register} from "../shared/models/register.model";

@Injectable()
export class AuthManagementService {
  private tokenKey: string = environment.JWT_TOKEN_KEY;
  private emptyUser: LoginResponse = ({
    firstName: '',
    lastName: '',
    accessToken: '',
    userId: 0,
    expirationDate: '',
  });

  private isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isUserLoggedIn$: Observable<boolean> = this.isUserLoggedIn.asObservable();
  private user: BehaviorSubject<LoginResponse> = new BehaviorSubject<LoginResponse>(this.emptyUser);
  user$: Observable<LoginResponse> = this.user.asObservable();

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn();
  }

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
        this.isUserLoggedIn.next(true);
        this.user.next(user);
        return true
      }
    }

    return false;
  }

  logOutUser() {
    localStorage.removeItem(this.tokenKey);
    this.isUserLoggedIn.next(false);
    this.user.next(this.emptyUser);
    this.router.navigate(['login']);
  }

  registerUser(user: Register) {
    this.authService.postRegisterUser(user).subscribe( () => {
      this.router.navigate(['register/confirm']);
    });
  }

  confirmUser(token: string) {
    this.authService.getConfirmRegistration(token).subscribe( () => {
      this.router.navigate(['register/confirmed'])
    });
  }
}
