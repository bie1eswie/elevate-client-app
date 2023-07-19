import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { Enums } from "src/app/enums/enums";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: Enums.NavigationRoutesForRouter.Registration, component: RegisterComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {

 }
