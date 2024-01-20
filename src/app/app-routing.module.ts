import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLayoutComponent } from './modules/account/components/account-layout/account-layout.component';
import { Enums } from './enums/enums';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './modules/shared/components/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', redirectTo: Enums.NavigationRoutesForRouter.Account, pathMatch: 'full' },
  {
    path: '', component: AccountLayoutComponent,
    children: [
      { path: Enums.NavigationRoutesForRouter.Account, loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)}
    ]
  },
  {
    path:'',component: MainLayoutComponent, /*canActivate: [AuthGuard],*/
    children: [
      { path: Enums.NavigationRoutesForRouter.Dashboard, loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
