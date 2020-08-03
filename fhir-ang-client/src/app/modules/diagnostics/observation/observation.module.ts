import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservationRoutingModule } from './observation-routing.module';
import { ObservationComponent } from './observation.component';


@NgModule({
  declarations: [ObservationComponent],
  imports: [
    CommonModule,
    ObservationRoutingModule
  ]
})
export class ObservationModule { }
