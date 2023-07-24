import { Injectable } from '@angular/core';
import { Enums } from 'src/app/enums/enums';
import { ServiceConfig } from 'src/app/services/config.service/config.service';
import { AbstractHumanAPIService } from 'src/app/services/human-api/human.api.service.abstract';
import { SessionManagerService } from 'src/app/services/session-manager/session-manager.service';
declare var formComponent: any;
declare var HumanConnect: any;

@Injectable({
  providedIn: 'root'
})
export class DeviceComponentService {

  constructor(private sessionManager: SessionManagerService,
              private configService: ServiceConfig,
              private humanAPIService: AbstractHumanAPIService) { }

  ConnectHumanApi(token: string) {
    let email = this.sessionManager.retrieve(Enums.SessionVariables.UserEmail);
    const entityNumber = email;
    const clientId = this.configService.humanAPIClientId;
    let _this = this;

    let options = {
        clientUserId: encodeURIComponent(entityNumber),
        clientId: clientId,
        publicToken: token,
        finish: function (err:any, sessionTokenObject: any) {
            console.log(sessionTokenObject)
            _this.humanAPIService.saveAccessToken(sessionTokenObject).subscribe(result=>{
              console.log(result);
            });
        },
        close: function () {
            /* (optional) Called when a user closes the popup
                     without connecting any data sources */
            formComponent.callOnClose(false);
        },
        error: function () {
            /* (optional) Called if an error occurs when loading
                     the popup. */
        },
    };
    HumanConnect.open(options);
  }
}
