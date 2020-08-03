import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { FhirService } from 'src/app/core/services';


@Component({
  selector: 'app-patient-laboratory-observations',
  templateUrl: './patient-laboratory-observations.component.html',
  styleUrls: ['./patient-laboratory-observations.component.css'],
})
export class PatientLaboratoryObservationsComponent implements OnInit {
  @Input() patientId: string;
  laboratoryObservations$: Observable<any>;

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all laboratory observations of the patient
    this.laboratoryObservations$ = this.service.search({
      resourceType: 'Observation',
      params: [
        `patient=${this.patientId}`,
        'category=laboratory',
        '_sort=code,-date',
      ],
    });
  }
}
