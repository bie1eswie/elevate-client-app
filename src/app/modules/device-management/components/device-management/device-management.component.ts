import { Component, OnDestroy, OnInit } from '@angular/core';
import { Enums } from 'src/app/enums/enums';
import { IUser } from 'src/app/models/users/user';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { AbstractHumanAPIService } from 'src/app/services/human-api/human.api.service.abstract';
import { SessionManagerService } from 'src/app/services/session-manager/session-manager.service';
import { DeviceComponentService } from '../../service/device-component.service';

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
              private sessionManager: SessionManagerService,
              private deviceComponentService: DeviceComponentService){

  }
  ngOnDestroy(): void {
    this.token ='';
  }
  ngOnInit(): void {
    this.accountService.currentUser$.subscribe(result=>{
      this.currentUser = result;
    })
    this.token = this.sessionManager.retrieve(Enums.SessionVariables.AccessToken);
  }
  ConnectHumanApi(){
    this.deviceComponentService.ConnectHumanApi(this.token);
  }
}
