import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { FhirService } from 'src/app/core/services';


@Component({
  selector: 'app-patient-medication-requests',
  templateUrl: './patient-medication-requests.component.html',
  styleUrls: ['./patient-medication-requests.component.css'],
})
export class PatientMedicationRequestsComponent implements OnInit {
  @Input() patientId: string;
  medicationRequests$: Observable<any>;

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all medication requests of the patient
    this.medicationRequests$ = this.service.search({
      resourceType: 'MedicationRequest',
      params: [
        `patient=${this.patientId}`,
        '_sort=status,-date',
      ],
    });
  }
}
