import { Injectable } from '@angular/core';
import { AbstractServiceAuthentication } from './authentication.service.abstract';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionManagerService } from '../session-manager/session-manager.service';
import { AbstractEndpoints } from 'src/environments/endpoints/endpoints.abstract';
import { IUser } from 'src/app/models/users/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements AbstractServiceAuthentication {

  constructor(private http: HttpClient,
    private appDataService: SessionManagerService,
    private endpoints: AbstractEndpoints) {

    }
    isLoggedIn() : boolean {
      const token = this.appDataService.GetToken(); // get token from local storage
      if(!token){
        return false;
      }
      const payload = atob(token.split('.')[1]); // decode payload of token
      const parsedPayload = JSON.parse(payload); // convert payload into an Object

      return parsedPayload.exp > Date.now() / 1000; // check if token is expired

    }
   login(values: any): Observable<IUser> {
    return this.http.post<IUser>(this.endpoints.authorization.loginAPI,values);
  }
   register(values: any): Observable<IUser> {
    return this.http.post<IUser>(this.endpoints.authorization.registrationAPI,values);
  }
   checkUserExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(this.endpoints.authorization.userCheckAPI + '?email=' + email);
  }
}
