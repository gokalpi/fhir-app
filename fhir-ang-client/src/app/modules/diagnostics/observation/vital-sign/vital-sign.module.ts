import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitalSignRoutingModule } from './vital-sign-routing.module';
import { VitalSignComponent } from './vital-sign.component';


@NgModule({
  declarations: [VitalSignComponent],
  imports: [
    CommonModule,
    VitalSignRoutingModule
  ]
})
export class VitalSignModule { }
