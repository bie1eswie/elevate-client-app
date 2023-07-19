import { Observable } from "rxjs";
import { SessionManagerService } from "src/app/services/session-manager/session-manager.service";
import { AbstractEndpoints } from "src/environments/endpoints/endpoints.abstract";
import { HttpClient } from "@angular/common/http";
import { AbstractServiceAuthentication } from "./authentication.service.abstract";

export class AuthenticationServiceMock implements AbstractServiceAuthentication {

  constructor(private http: HttpClient,
    private appDataService: SessionManagerService,
    private endpoints: AbstractEndpoints) {

    }
   isLoggedIn(): boolean {
    throw new Error("Method not implemented.");
  }
   login(values: any): Observable<any> {
    throw new Error("Method not implemented.");
  }
   register(values: any): Observable<any> {
    throw new Error("Method not implemented.");
  }
   checkUserExists(email: string): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
}
