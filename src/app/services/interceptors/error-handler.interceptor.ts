import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";
import {NotifierService} from "angular-notifier";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private notifierService: NotifierService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError( (error: HttpErrorResponse) => {
        let message = '';
        console.log(error);
        if (error.error.message) {
          message = error.error.message;
        } else {
          message = 'Something went wrong. Please try again.'
        }
        this.notifierService.notify('error', message);
        return throwError(message);
      })
    )
  }
}
