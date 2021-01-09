import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtHeaders = new HttpHeaders().set('newjwt', 'dgfdghkjh').set('newuserid', '1');
    if (request.method === 'GET') {
      const req = request.clone({
        headers: jwtHeaders
      });
      console.log(req);
      return next.handle(req);
    }
    return next.handle(request);
  }
}
