import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AllNgZorroAntdModules } from '../../all-ng-zorro-antd.module';

@NgModule({
  declarations: [AccountComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    AllNgZorroAntdModules,
  ],
})
export class AccountModule {}
