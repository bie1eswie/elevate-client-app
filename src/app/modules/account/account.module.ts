import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule   }   from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ],
  exports: [
    AccountLayoutComponent
  ],
})
export class AccountModule { }
