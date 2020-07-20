import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
  declarations: [PatientAddComponent, PatientListComponent],
  imports: [CommonModule, PatientRoutingModule],
})
export class PatientModule {}
