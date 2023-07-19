import { HttpClient } from "@angular/common/http";
import { AbstractEndpoints } from "src/environments/endpoints/endpoints.abstract";
import { ServiceMonitoring } from "../monitor.service/monitor.service";
import { SessionManagerService } from "../session-manager/session-manager.service";
import { AbstractServiceAuthentication } from "./authentication.service.abstract";
import { AppSettings } from "src/environments/app-settings/app-settings";
import { Enums } from "src/app/enums/enums";
import { AuthenticationServiceMock } from "./authentication.service.mock";
import { AuthenticationService } from "./authentication.service";

export function FactoryServiceAuthentication(
  httpClient: HttpClient, serviceMonitor: ServiceMonitoring,
   endpoints: AbstractEndpoints, session: SessionManagerService
): AbstractServiceAuthentication {
  serviceMonitor.logEvent('FactoryServiceAuthentication', 'Service Authentication Factory loaded');
      if(AppSettings.environment == Enums.Environments.MockData)
        return new AuthenticationServiceMock(httpClient,session,endpoints);
      else
        return new AuthenticationService(httpClient,session,endpoints);
}
