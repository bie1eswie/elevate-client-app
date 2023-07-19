import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../services/data-service/api.service';
import { ServiceMonitoring } from '../services/monitor.service/monitor.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private dataService: ApiService,
              private serviceMonitor: ServiceMonitoring) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.serviceMonitor.logEvent('AuthInterceptor', 'Intercepted request to '+ request.url);
    const token = this.dataService.GetToken();
    if (token) {
      request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    return next.handle(request);
  }
}
