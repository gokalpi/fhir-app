import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarePlanRoutingModule } from './care-plan-routing.module';
import { CarePlanComponent } from './care-plan.component';

@NgModule({
  declarations: [CarePlanComponent],
  imports: [CommonModule, CarePlanRoutingModule],
})
export class CarePlanModule {}
