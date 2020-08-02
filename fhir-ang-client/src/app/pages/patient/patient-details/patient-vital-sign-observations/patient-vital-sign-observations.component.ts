import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { FhirService } from '../../../../core/services';

@Component({
  selector: 'app-patient-vital-sign-observations',
  templateUrl: './patient-vital-sign-observations.component.html',
  styleUrls: ['./patient-vital-sign-observations.component.css'],
})
export class PatientVitalSignObservationsComponent implements OnInit {
  @Input() patientId: string;
  vitalSignObservations$: Observable<any>;

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all vital sign observations of the patient
    this.vitalSignObservations$ = this.service.search({
      resourceType: 'Observation',
      params: [
        `patient=${this.patientId}`,
        'category=vital-signs',
        '_sort=code,-date',
      ],
    });
  }

  getVitalSignObservationValue(observation: any) {
    if (observation.valueQuantity) {
      return `${observation.valueQuantity.value} ${observation.valueQuantity.unit}`;
    }

    let vitalSignValue = [];
    for (let index = 0; index < observation.component.length; index++) {
      vitalSignValue.push(
        `${observation.component[index].code.text}: ${observation.component[index].valueQuantity.value} ${observation.component[index].valueQuantity.unit}`
      );
    }

    return vitalSignValue.join(', ');
  }
}
