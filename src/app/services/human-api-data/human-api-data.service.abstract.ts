import { Observable } from "rxjs";
import { IHeartRateReading } from "src/app/models/data/heart-rate-reading";

export abstract class AbstractServiceHumanApiData{
  abstract getVitalsData(accessToken: string, vitalsName: string): Observable<IHeartRateReading[]>;
}
