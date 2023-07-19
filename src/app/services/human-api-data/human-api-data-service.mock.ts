import { Injectable } from '@angular/core';
import { AbstractServiceHumanApiData } from './human-api-data.service.abstract';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AbstractEndpoints } from 'src/environments/endpoints/endpoints.abstract';
import { IHeartRateReading } from 'src/app/models/data/heart-rate-reading';

@Injectable({
  providedIn: 'root'
})
export class HumanApiDataServiceMock implements AbstractServiceHumanApiData {

  constructor(private http: HttpClient,
    private endpoints: AbstractEndpoints) { }

    getVitalsData(accessToken: string, vitalsName: string): Observable<IHeartRateReading[]> {
      return this.http.get<IHeartRateReading[]>(this.endpoints.humanApiData.getVitalsData(accessToken, vitalsName))
    }
}
