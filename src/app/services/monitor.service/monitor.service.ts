import { Injectable } from '@angular/core';
import { ServiceConfig } from '../config.service/config.service';
import { Enums } from 'src/app/enums/enums';
import { ErrorSeverityLevel } from 'src/app/enums/elevate/error-severity-level.enum';
@Injectable({
  providedIn: 'root',
})
export class ServiceMonitoring {

  loggingLevel = Enums.ErrorSeverityLevel.Info;
  logTo: string[] = [];

  constructor(private serviceConfig: ServiceConfig) {
    this.loggingLevel = serviceConfig.logging
      .loggingLevel as ErrorSeverityLevel;
    this.logTo = serviceConfig.logging.errorLogTo;
  }

  logEvent(
    origin: any,
    descriptionOfEvent: string,
    properties?: { [key: string]: any }
  ): void {
    const originName = this.getOriginName(origin);
    if (this.logTo.includes('console')) {
      if (this.loggingLevel === Enums.ErrorSeverityLevel.Info) {
        console.log(`${originName}: `, descriptionOfEvent);
        if (properties) {
          console.log('properties', properties);
        }
      }
    }
    //TO DO: Application Insights
  }

  logException(
    origin: any,
    exception: Error | string,
    properties: { [key: string]: any } = {},
    severityLevel:
      | ErrorSeverityLevel.Error
      | ErrorSeverityLevel.Critical = Enums.ErrorSeverityLevel.Error
  ): void {
    const originName = this.getOriginName(origin);
    exception =
      typeof exception === 'string' ? new Error(exception) : exception;
    this.addOriginToProperties(originName, properties);
    if (this.logTo.includes('console')) {
      console.error(originName, exception);
      console.log('Error properties:', properties);
    }
    //TO DO: Application Insights
  }

  private getOriginName(origin: any): string {
    const originName =
      typeof origin === 'string' ? origin : origin?.constructor.name;
    return originName;
  }

  private addOriginToProperties(
    origin: string,
    properties: { [key: string]: any }
  ): void {
    const originParameterName = 'origin';
    properties[originParameterName] = origin;
  }
}
