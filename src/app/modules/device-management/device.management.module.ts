import { NgModule } from "@angular/core";
import { DeviceManagementComponent } from "./components/device-management/device-management.component";
import { DeviceManagementRoutingModule } from "./device.management.routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DeviceManagementComponent
  ],
  imports: [
    DeviceManagementRoutingModule,
    CommonModule
  ],
  exports: [
  ],
})
export class DeviceManagementModule { }
