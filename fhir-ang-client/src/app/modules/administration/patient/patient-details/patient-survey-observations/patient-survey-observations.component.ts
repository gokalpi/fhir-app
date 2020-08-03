import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { FhirService } from 'src/app/core/services';


@Component({
  selector: 'app-patient-survey-observations',
  templateUrl: './patient-survey-observations.component.html',
  styleUrls: ['./patient-survey-observations.component.css'],
})
export class PatientSurveyObservationsComponent implements OnInit {
  @Input() patientId: string;
  surveyObservations$: Observable<any>;

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all survey observations of the patient
    this.surveyObservations$ = this.service.search({
      resourceType: 'Observation',
      params: [
        `patient=${this.patientId}`,
        'category=survey',
        '_sort=code,-date',
      ],
    });
  }
}
