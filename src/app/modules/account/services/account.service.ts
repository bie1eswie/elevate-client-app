import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { SessionManagerService } from 'src/app/services/session-manager/session-manager.service';
import { IUser } from 'src/app/models/users/user';
import { RegisterDTO } from 'src/app/models/registration/registration';
import { AbstractServiceAuthentication } from 'src/app/services/authentication.service/authentication.service.abstract';
import { Router } from '@angular/router';
import { Enums } from 'src/app/enums/enums';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currUserStore = new ReplaySubject<IUser>(1);
  currentUser$ = this.currUserStore.asObservable();

  constructor(private appDataService: SessionManagerService,
              private authenticationService: AbstractServiceAuthentication,
              private router: Router) {

              }

  isLoggedIn() : boolean {
    return this.authenticationService.isLoggedIn();
  }

  login(values: any) {
    this.appDataService.store(Enums.SessionVariables.AuthorizationData,'');
   this.authenticationService.login(values).subscribe((user)=>{
      this.appDataService.store(Enums.SessionVariables.AuthorizationData,user.token);
      this.appDataService.store(Enums.SessionVariables.UserEmail,user.email);
      this.currUserStore.next(user);
      this.gotToDeviceManagement();
    })
  }

  register(values: RegisterDTO){
    this.appDataService.store(Enums.SessionVariables.AuthorizationData,'');
    this.authenticationService.register(values).subscribe((user)=>{
      this.appDataService.store(Enums.SessionVariables.AuthorizationData,user.token);
      this.appDataService.store(Enums.SessionVariables.UserEmail,user.email);
      this.currUserStore.next(user);
      this.gotToDeviceManagement();
    });
  }
  checkUserExists(email: string): Observable<any> {
    return this.authenticationService.checkUserExists(email);
  }
  gotToDeviceManagement(){
    this.router.navigate(['/device-management']);
  }
}
