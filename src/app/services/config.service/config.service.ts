import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IConfig,
  InitializeConfig,
  ILogging,
} from 'src/environments/config/config.interface';
import { AppSettings } from 'src/environments/app-settings/app-settings';
import { Enums } from 'src/app/enums/enums';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceConfig implements IConfig {
  private readonly http: HttpClient;

  apiBaseURL!: string;
  appInsightsKey!: string;
  redirectUrl!: string;
  logging!: ILogging;
  humanAPIClientId!: string;

  constructor(private readonly httpHandler: HttpBackend) {
    this.http = new HttpClient(httpHandler);
    Object.assign(this, InitializeConfig());
  }
  // This method must return a promise for the APP_INITIALIZER to work correctly
  loadConfig(): Promise<void> {
    const observable = this.http.get<IConfig>(AppSettings.configFileLocation)
    var promise = firstValueFrom(observable);
    return promise
      .then((config: IConfig) => {
        this.apiBaseURL = config.apiBaseURL;
        this.appInsightsKey = config.appInsightsKey;
        this.humanAPIClientId = config.humanAPIClientId;
        switch (config.logging.loggingLevel) {
          case 'info':
            this.logging.loggingLevel = Enums.ErrorSeverityLevel.Info;
            break;
          case 'warning':
            this.logging.loggingLevel = Enums.ErrorSeverityLevel.Warning;
            break;
          case 'error':
            this.logging.loggingLevel = Enums.ErrorSeverityLevel.Error;
            break;
          default:
            console.warn(
              "Logging level not set in config.  Level set to 'Info' by default"
            );
            this.logging.loggingLevel = Enums.ErrorSeverityLevel.Info;
            break;
        }
        this.logging.errorLogTo = config.logging.errorLogTo;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
