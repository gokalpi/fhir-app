import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../../core/core.module';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  declarations: [AccountComponent, AccountDetailsComponent],
  imports: [CommonModule, AccountRoutingModule, CoreModule],
})
export class AccountModule {}
