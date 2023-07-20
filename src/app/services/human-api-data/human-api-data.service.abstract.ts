import { Observable } from "rxjs";
import { IActivitySummary } from "src/app/models/data/activity-summary";
import { IHeartRateReading } from "src/app/models/data/heart-rate-reading";

export abstract class AbstractServiceHumanApiData{
  abstract getVitalsData(accessToken: string, vitalsName: string): Observable<IHeartRateReading[]>;
  abstract getActivitySummary(accessToken: string): Observable<IActivitySummary[]>;
}
