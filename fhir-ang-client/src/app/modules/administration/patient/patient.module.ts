import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { CoreModule } from '../../../core/core.module';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientMedicationRequestsComponent } from './patient-details/patient-medication-requests/patient-medication-requests.component';
import { PatientLaboratoryObservationsComponent } from './patient-details/patient-laboratory-observations/patient-laboratory-observations.component';
import { PatientSurveyObservationsComponent } from './patient-details/patient-survey-observations/patient-survey-observations.component';
import { PatientVitalSignObservationsComponent } from './patient-details/patient-vital-sign-observations/patient-vital-sign-observations.component';
import { PatientEncountersComponent } from './patient-details/patient-encounters/patient-encounters.component';
import { PatientAppointmentsComponent } from './patient-details/patient-appointments/patient-appointments.component';
import { PatientCarePlansComponent } from './patient-details/patient-care-plans/patient-care-plans.component';
import { PatientDiagnosticReportsComponent } from './patient-details/patient-diagnostic-reports/patient-diagnostic-reports.component';
import { PatientProceduresComponent } from './patient-details/patient-procedures/patient-procedures.component';

@NgModule({
  declarations: [
    PatientListComponent,
    PatientDetailsComponent,
    PatientMedicationRequestsComponent,
    PatientLaboratoryObservationsComponent,
    PatientSurveyObservationsComponent,
    PatientVitalSignObservationsComponent,
    PatientEncountersComponent,
    PatientAppointmentsComponent,
    PatientCarePlansComponent,
    PatientDiagnosticReportsComponent,
    PatientProceduresComponent,
  ],
  imports: [CommonModule, PatientRoutingModule, CoreModule, SweetAlert2Module],
})
export class PatientModule {}
