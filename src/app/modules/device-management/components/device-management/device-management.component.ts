import { Component, OnDestroy, OnInit } from '@angular/core';
import { Enums } from 'src/app/enums/enums';
import { IUser } from 'src/app/models/users/user';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { AbstractHumanAPIService } from 'src/app/services/human-api/human.api.service.abstract';
import { SessionManagerService } from 'src/app/services/session-manager/session-manager.service';
@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.scss']
})
export class DeviceManagementComponent implements OnInit, OnDestroy {

  token = '';
  connectClosed = false;
  currentUser!: IUser;
  constructor(private humanAPIService: AbstractHumanAPIService,
              private accountService: AccountService,
              private sessionManager: SessionManagerService){

  }
  ngOnDestroy(): void {
    this.token ='';
  }
  ngOnInit(): void {
    this.accountService.currentUser$.subscribe(result=>{
      this.currentUser = result;
    })

    let email = this.sessionManager.retrieve(Enums.SessionVariables.UserEmail);

    this.humanAPIService.getAccessToken(email).subscribe(result =>{
      this.token = result;
      this.sessionManager.store(Enums.SessionVariables.AccessToken,result);
              setTimeout(() => {
          const event = document.createEvent('Event');
          event.initEvent('load', true, true);
          window.dispatchEvent(event);
        }, 0);
    });
  }
}
