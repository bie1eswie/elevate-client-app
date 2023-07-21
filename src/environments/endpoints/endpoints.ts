
import { ServiceConfig } from 'src/app/services/config.service/config.service';
import { AbstractEndpoints, IAuthorizationEndpoints, IHumanAPIDataEndpoints, IHumanAPIEndpoints } from './endpoints.abstract';

export class Endpoints implements AbstractEndpoints {

    constructor(private config: ServiceConfig) { }

    humanApi: IHumanAPIEndpoints = {
      getAccessToken: (email: string): string => {
        return `${this.config.apiBaseURL}/api/HumanAPI/GetAccessToken?email=${email}`
      }
     };

    authorization: IAuthorizationEndpoints = {
       registrationAPI : `${this.config.apiBaseURL}/api/Account/register`,
       loginAPI :`${this.config.apiBaseURL}/api/Account/login`,
       userCheckAPI: `${this.config.apiBaseURL}/api/Account/userexists`
    };
    humanApiData: IHumanAPIDataEndpoints = {
      getVitalsData: (accessToken: string, vitalName: string): string => {
        return `${this.config.apiBaseURL}/GetVitalsData?accessToken=${accessToken}&vitalName=${vitalName}`;
      },
      getActivitySummary: (accessToken: string): string => {
        return `${this.config.apiBaseURL}/GetActivitySummary?accessToken=${accessToken}`;
      },
      resyncData: (email: string): string => {
        return `${this.config.apiBaseURL}/ResyncData?email=${email}`;
      }
    };
}
