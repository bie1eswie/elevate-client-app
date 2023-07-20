import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { AccountModule } from './modules/account/account.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FactoryServiceConfig } from './services/config.service/config.service.factory';
import { InterceptorError } from './interceptors/error.interceptor';
import { AbstractEndpoints } from 'src/environments/endpoints/endpoints.abstract';
import { FactoryEndpoints } from 'src/environments/endpoints/endpoints.factory';
import { ServiceConfig } from './services/config.service/config.service';
import { ServiceMonitoring } from './services/monitor.service/monitor.service';
import { Router } from '@angular/router';
import { ApiService } from './services/data-service/api.service';
import { SessionManagerService } from './services/session-manager/session-manager.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AbstractServiceAuthentication } from './services/authentication.service/authentication.service.abstract';
import { FactoryServiceAuthentication } from './services/authentication.service/authentication.service.factory';
import { AbstractHumanAPIService } from './services/human-api/human.api.service.abstract';
import { FactoryServiceHumanAPI } from './services/human-api/human.api.service.factory';
import { AbstractServiceHumanApiData } from './services/human-api-data/human-api-data.service.abstract';
import { FactoryServiceHumanAPIData } from './services/human-api-data/human-api-data.service.factory';
import { InterceptorLoadingScreen } from './interceptors/loading.interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AccountModule,
    HttpClientModule,
  ],
  providers: [
        // APP INITIALIZER
        { provide: APP_INITIALIZER, useFactory: FactoryServiceConfig, deps: [ServiceConfig, Router], multi: true },
        // HTTP INTERCEPTORS
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorLoadingScreen, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorError, multi: true, deps: [ServiceMonitoring] },
        { provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi: true, deps: [ApiService, ServiceMonitoring]},
        { provide: AbstractEndpoints, useFactory: FactoryEndpoints, deps: [ServiceConfig, ServiceMonitoring] },
        { provide: AbstractServiceAuthentication,useFactory: FactoryServiceAuthentication,
          deps: [HttpClient, ServiceMonitoring, AbstractEndpoints, SessionManagerService]
        },
        { provide: AbstractHumanAPIService ,useFactory: FactoryServiceHumanAPI,
          deps: [HttpClient, ServiceMonitoring, AbstractEndpoints]
        },
        { provide: AbstractServiceHumanApiData ,useFactory: FactoryServiceHumanAPIData,
          deps: [HttpClient, ServiceMonitoring, AbstractEndpoints]
        },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
