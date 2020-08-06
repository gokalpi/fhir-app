import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { ClaimRoutingModule } from './claim-routing.module';
import { ClaimComponent } from './claim.component';

@NgModule({
  declarations: [ClaimComponent],
  imports: [CommonModule, ClaimRoutingModule, AllNgZorroAntdModules],
})
export class ClaimModule {}
