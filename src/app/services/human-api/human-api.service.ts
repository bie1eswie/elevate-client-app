import { Injectable } from '@angular/core';
import { AbstractHumanAPIService } from './human.api.service.abstract';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AbstractEndpoints } from 'src/environments/endpoints/endpoints.abstract';
@Injectable({
  providedIn: 'root'
})
export class HumanApiService implements AbstractHumanAPIService {

  constructor(private http: HttpClient,
              private endpoints: AbstractEndpoints) { }
 saveAccessToken(sessionTokenObject: any): Observable<any> {
  return this.http.post<string>(this.endpoints.humanApi.saveAccessToken(),sessionTokenObject);
  }

  getAccessToken(email: string): Observable<string> {
    return this.http.get(this.endpoints.humanApi.getAccessToken(email),{responseType: 'text'})
  }
}
