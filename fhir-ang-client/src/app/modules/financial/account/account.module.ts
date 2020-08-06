import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  declarations: [AccountComponent, AccountDetailsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AllNgZorroAntdModules,
    SweetAlert2Module,
  ],
})
export class AccountModule {}
