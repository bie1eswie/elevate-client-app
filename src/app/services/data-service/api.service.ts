import { Injectable } from '@angular/core';
import { SessionManagerService } from '../session-manager/session-manager.service';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
              private _sessionStore: SessionManagerService ) {
  }

 public GetToken(): any {
   let token = this._sessionStore.retrieve('authorizationData');
   return token;
}
}
