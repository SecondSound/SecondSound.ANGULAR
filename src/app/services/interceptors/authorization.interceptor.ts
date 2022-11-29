import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  private tokenKey: string = environment.JWT_TOKEN_KEY;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!(req.url.includes('public') || req.url.includes('auth'))) {
      const jwtToken = localStorage.getItem(this.tokenKey);
      req = req.clone({
        setHeaders: {
          'Authorization': jwtToken ? jwtToken : ''
        }
      });
    }

    return next.handle(req);
  }
}
