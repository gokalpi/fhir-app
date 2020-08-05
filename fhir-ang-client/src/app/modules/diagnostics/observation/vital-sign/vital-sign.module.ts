import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { VitalSignRoutingModule } from './vital-sign-routing.module';
import { VitalSignComponent } from './vital-sign.component';

@NgModule({
  declarations: [VitalSignComponent],
  imports: [
    CommonModule,
    VitalSignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AllNgZorroAntdModules,
  ],
})
export class VitalSignModule {}
