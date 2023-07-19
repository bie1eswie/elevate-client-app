import { NgModule } from "@angular/core";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    DashboardRoutingModule
  ],
  exports: [
  ],
})
export class DashboardModule { }
