
import { ErrorSeverityLevel } from 'src/app/enums/elevate/error-severity-level.enum';
import { Enums } from 'src/app/enums/enums';

export function InitializeConfig(): IConfig {
    const config: IConfig = {
        apiBaseURL: '',
        appInsightsKey: '',
        humanAPIClientId: '',
        logging: {
            errorLogTo: ['console', 'appInsights'],
            loggingLevel: Enums.ErrorSeverityLevel.Error
        }
    };
    return config;
}

export interface IConfig {
    apiBaseURL: string;
    appInsightsKey: string;
    logging: ILogging;
    humanAPIClientId: string;
}

export interface ILogging {
    errorLogTo: string[];
    loggingLevel: ErrorSeverityLevel | string;
}
