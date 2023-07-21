import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Enums } from 'src/app/enums/enums';
import { IActivitySummary } from 'src/app/models/data/activity-summary';
import { IHeartRateReading } from 'src/app/models/data/heart-rate-reading';
import { IUser } from 'src/app/models/users/user';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { AbstractServiceHumanApiData } from 'src/app/services/human-api-data/human-api-data.service.abstract';
import { SessionManagerService } from 'src/app/services/session-manager/session-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public chart: any;
  public data: IHeartRateReading[] = [];
  public activitySummary: IActivitySummary[] =[];
  currentUser!: IUser
  constructor(private humanApiData: AbstractServiceHumanApiData,
              private accountService: AccountService,
              private sessionManager: SessionManagerService
              ){

  }
  ngOnInit(): void {
    this.accountService.currentUser$.subscribe(result=>{
      this.currentUser = result;
    })
    this.getHeartRateData();
    this.getActivitySummary();
  }
  getHeartRateData(){
    const token = this.sessionManager.retrieve(Enums.SessionVariables.AccessToken);
    this.humanApiData.getVitalsData(token, Enums.HumanAPIDataEndPoints.HeartRateReadings).subscribe(result=>{
      this.data = result;
    })
  }
  getActivitySummary(){
    const token = this.sessionManager.retrieve(Enums.SessionVariables.AccessToken);
    this.humanApiData.getActivitySummary(token).subscribe(result=>{
      this.activitySummary = result;
    });
  }
  resyncData(){
    const email = this.sessionManager.retrieve(Enums.SessionVariables.UserEmail);
    this.humanApiData.resyncData(email).subscribe(result=>{
      this.getActivitySummary();
    })
  }
}
