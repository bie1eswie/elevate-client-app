import { AppSettings } from "src/environments/app-settings/app-settings";
import { AbstractEndpoints } from "src/environments/endpoints/endpoints.abstract";
import { AbstractServiceHumanApiData } from "./human-api-data.service.abstract";
import { HttpClient } from "@angular/common/http";
import { Enums } from "src/app/enums/enums";
import { HumanApiDataService } from "./human-api-data.service";
import { HumanApiDataServiceMock } from "./human-api-data-service.mock";
import { ServiceMonitoring } from "../monitor.service/monitor.service";

export function FactoryServiceHumanAPIData(  httpClient: HttpClient, serviceMonitor: ServiceMonitoring,
  endpoints: AbstractEndpoints): AbstractServiceHumanApiData {
    serviceMonitor.logEvent('FactoryServiceHumanAPIData', 'Service HumanAPI Data Factory loaded');
    if(AppSettings.environment == Enums.Environments.MockData)
      return new HumanApiDataServiceMock(httpClient,endpoints)
    else
    return new HumanApiDataService(httpClient,endpoints)
}
