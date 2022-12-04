import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  private tokenKey: string = environment.JWT_TOKEN_KEY;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!(req.url.includes('public') || req.url.includes('auth'))) {
      const user = JSON.parse(localStorage.getItem(this.tokenKey) as string);
      req = req.clone({
        setHeaders: {
          'Authorization': user ? 'Bearer ' + user.accessToken : ''
        }
      });
    }

    return next.handle(req);
  }
}
