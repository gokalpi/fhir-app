import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicationRequestRoutingModule } from './medication-request-routing.module';
import { MedicationRequestComponent } from './medication-request.component';


@NgModule({
  declarations: [MedicationRequestComponent],
  imports: [
    CommonModule,
    MedicationRequestRoutingModule
  ]
})
export class MedicationRequestModule { }
