import { Observable } from "rxjs";

export abstract class AbstractHumanAPIService{
  abstract getAccessToken(email: string): Observable<string>;
}
