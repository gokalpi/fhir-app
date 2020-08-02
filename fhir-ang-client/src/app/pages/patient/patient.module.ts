import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllNgZorroAntdModules } from '../../all-ng-zorro-antd.module';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientMedicationRequestsComponent } from './patient-details/patient-medication-requests/patient-medication-requests.component';

@NgModule({
  declarations: [PatientListComponent, PatientDetailsComponent, PatientMedicationRequestsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PatientRoutingModule,
    AllNgZorroAntdModules,
  ],
})
export class PatientModule {}
