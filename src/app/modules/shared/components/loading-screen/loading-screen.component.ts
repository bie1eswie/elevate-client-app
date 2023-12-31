import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ServiceLoadingScreen } from 'src/app/services/loading-screen.service/loading-screen.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit, OnDestroy {

  loading = false;
  loadingSubscription!: Subscription;

  constructor(private loadingScreenService: ServiceLoadingScreen) {
  }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(200)).subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

}
