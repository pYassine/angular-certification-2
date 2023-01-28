/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class NbaApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        "X-RapidAPI-Key": "4bebb44a70msha1c23a3a3360737p10c682jsn80e8684a8f44",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    });

    return next.handle(request);
  }
}
