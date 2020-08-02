import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { FhirService } from '../../../../core/services';

@Component({
  selector: 'app-patient-encounters',
  templateUrl: './patient-encounters.component.html',
  styleUrls: ['./patient-encounters.component.css'],
})
export class PatientEncountersComponent implements OnInit {
  @Input() patientId: string;
  patientEncounters$: Observable<any>;

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all encounters of the patient
    this.patientEncounters$ = this.service.search({
      resourceType: 'Encounter',
      params: [`patient=${this.patientId}`, '_sort=-date'],
    });
  }

  getTypes(types: any) {
    return types.map((e) => e.text).join(',');
  }
}
