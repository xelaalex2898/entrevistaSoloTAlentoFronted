import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, flatMap, of, throwError } from 'rxjs';
import { UsersService } from './services/users.service';
import { EventBusService } from './_shared/event-bus.service';
import { EventData } from './_shared/event.class';
import { StorageService } from './services/storage.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private storageService: StorageService, private eventBusService: EventBusService, private usersService:UsersService) { }

  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.usersService.getToken();

    if (token=="") {
      return next.handle(req);
    }
    else{
      const newtoken ="Bearer "+ token;
      req = req.clone({
        headers: req.headers
          .set('Authorization', newtoken)
          
      });
      return next.handle(req);
    }
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.storageService.isLoggedIn()) {
        this.eventBusService.emit(new EventData('logout', null));
      }
    }

    return next.handle(request);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];