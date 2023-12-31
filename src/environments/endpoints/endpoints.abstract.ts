export abstract class AbstractEndpoints {

    authorization!: IAuthorizationEndpoints;
    humanApi!: IHumanAPIEndpoints;
    humanApiData!: IHumanAPIDataEndpoints;

    constructor() { }
}
export interface IAuthorizationEndpoints {
    loginAPI: string;
    registrationAPI: string;
    userCheckAPI: string;
}

export interface IHumanAPIEndpoints {
  getAccessToken(email: string): string;
  saveAccessToken(): string;
}

export interface IHumanAPIDataEndpoints {
  getVitalsData(email: string,vitalName: string): string;
  getActivitySummary(accessToken: string): string;
  resyncData(email: string): string
}
