
import { ServiceConfig } from 'src/app/services/config.service/config.service';
import { AbstractEndpoints, IAuthorizationEndpoints, IHumanAPIDataEndpoints, IHumanAPIEndpoints } from './endpoints.abstract';

export class EndpointsMock implements AbstractEndpoints {

  constructor(private config: ServiceConfig) { }

  humanApi: IHumanAPIEndpoints = {
    getAccessToken: (email: string): string => {
      return `${this.config.apiBaseURL}/api/HumanAPI/GetAccessToken?email=${email}`;
    },
    saveAccessToken: function (): string {
      throw new Error('Function not implemented.');
    }
  };
    authorization: IAuthorizationEndpoints = {
      registrationAPI : '/api/account/register',
      loginAPI :'/api/account/login',
      userCheckAPI: '/api/account/userexists'
    };
    humanApiData: IHumanAPIDataEndpoints = {
      getVitalsData: (accessToken: string, vitalName: string): string => {
        return `${this.config.apiBaseURL}/api/HumanAPI/GetVitalsData?email=${accessToken}`
      },
      getActivitySummary: (accessToken: string): string => {
        return `${this.config.apiBaseURL}/GetActivitySummary?accessToken=${accessToken}`;
      },
      resyncData: (email: string): string => {
        return `${this.config.apiBaseURL}/ResyncData?email=${email}`;
      }
     };
}
