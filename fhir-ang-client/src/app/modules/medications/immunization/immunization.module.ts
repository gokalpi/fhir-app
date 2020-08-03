import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmunizationRoutingModule } from './immunization-routing.module';
import { ImmunizationComponent } from './immunization.component';


@NgModule({
  declarations: [ImmunizationComponent],
  imports: [
    CommonModule,
    ImmunizationRoutingModule
  ]
})
export class ImmunizationModule { }
