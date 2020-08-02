import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { FhirService } from '../../../../core/services';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {
  @Input() patientId: string;
  patientAppointments$: Observable<any>;

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all appointments of the patient
    this.patientAppointments$ = this.service.search({
      resourceType: 'Appointment',
      params: [`patient=${this.patientId}`, '_sort=-date'],
    });
  }

  getReasonCodes(reasonCodes: any) {
    return (reasonCodes) ? reasonCodes.map((e) => e.coding[0].display).join(', ') : '';
  }
}
