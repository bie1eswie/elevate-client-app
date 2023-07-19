import { HttpClient } from "@angular/common/http";
import { AbstractEndpoints } from "src/environments/endpoints/endpoints.abstract";
import { ServiceMonitoring } from "../monitor.service/monitor.service";
import { AbstractHumanAPIService } from "./human.api.service.abstract";
import { AppSettings } from "src/environments/app-settings/app-settings";
import { Enums } from "src/app/enums/enums";
import { HumanApiServiceMock } from "./human.api.service.mock";
import { HumanApiService } from "./human-api.service";

export function FactoryServiceHumanAPI(  httpClient: HttpClient, serviceMonitor: ServiceMonitoring,
  endpoints: AbstractEndpoints): AbstractHumanAPIService {
    serviceMonitor.logEvent('FactoryServiceHumanAPI', 'Service HumanAPI Factory loaded');
    if(AppSettings.environment == Enums.Environments.MockData)
      return new HumanApiServiceMock(httpClient,endpoints)
    else
    return new HumanApiService(httpClient,endpoints)
}
