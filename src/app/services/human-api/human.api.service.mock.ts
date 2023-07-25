import { Injectable } from '@angular/core';
import { AbstractHumanAPIService } from './human.api.service.abstract';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionManagerService } from '../session-manager/session-manager.service';
import { AbstractEndpoints } from 'src/environments/endpoints/endpoints.abstract';

@Injectable({
  providedIn: 'root'
})
export class HumanApiServiceMock implements AbstractHumanAPIService {

  constructor(private http: HttpClient,
              private endpoints: AbstractEndpoints) { }
  saveAccessToken(sessionTokenObject: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  getAccessToken(email: string): Observable<string> {
    return this.http.get<string>(this.endpoints.humanApi.getAccessToken(email))
  }
}
