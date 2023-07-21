import { Injectable } from '@angular/core';
import { AbstractServiceHumanApiData } from './human-api-data.service.abstract';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AbstractEndpoints } from 'src/environments/endpoints/endpoints.abstract';
import { IHeartRateReading } from 'src/app/models/data/heart-rate-reading';
import { IActivitySummary } from 'src/app/models/data/activity-summary';

@Injectable({
  providedIn: 'root'
})
export class HumanApiDataServiceMock implements AbstractServiceHumanApiData {

  constructor(private http: HttpClient,
    private endpoints: AbstractEndpoints) { }

    resyncData(email: string): Observable<string> {
      return this.http.get(this.endpoints.humanApiData.resyncData(email),{responseType: 'text'})
    }

    getVitalsData(accessToken: string, vitalsName: string): Observable<IHeartRateReading[]> {
      return this.http.get<IHeartRateReading[]>(this.endpoints.humanApiData.getVitalsData(accessToken, vitalsName))
    }
    getActivitySummary(accessToken: string): Observable<IActivitySummary[]> {
      return this.http.get<IActivitySummary[]>(this.endpoints.humanApiData.getActivitySummary(accessToken))
    }
}
