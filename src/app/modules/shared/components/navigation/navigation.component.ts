import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enums } from 'src/app/enums/enums';
import { SessionManagerService } from 'src/app/services/session-manager/session-manager.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router,
              private appDataService: SessionManagerService) { }

  ngOnInit(): void {
    //this.shoppingCard$ = this.shoppingCardService.shoppingCard$;
  }

  checkoutClick()
  {
    this.appDataService.store(Enums.SessionVariables.AccessToken,'');
    this.appDataService.store(Enums.SessionVariables.AuthorizationData,'');
    this.appDataService.store(Enums.SessionVariables.UserEmail,'')
    this.router.navigate(['/account']);
  }
}
