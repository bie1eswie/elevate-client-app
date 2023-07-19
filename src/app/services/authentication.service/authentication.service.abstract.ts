import { Observable } from "rxjs";
import { IUser } from "src/app/models/users/user";

export abstract class AbstractServiceAuthentication{
  abstract isLoggedIn() : boolean;
  abstract login(values: any) : Observable<IUser>;
  abstract register(values: any): Observable<IUser>;
  abstract checkUserExists(email: string): Observable<boolean>;
}
