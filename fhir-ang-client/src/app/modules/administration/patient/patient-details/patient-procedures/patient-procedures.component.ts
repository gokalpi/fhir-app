import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { FhirService } from 'src/app/core/services';


@Component({
  selector: 'app-patient-procedures',
  templateUrl: './patient-procedures.component.html',
  styleUrls: ['./patient-procedures.component.css'],
})
export class PatientProceduresComponent implements OnInit {
  @Input() patientId: string;
  patientProcedures$: Observable<any>;

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all care plans of the patient
    this.patientProcedures$ = this.service.search({
      resourceType: 'Procedure',
      params: [`patient=${this.patientId}`, '_sort=-date'],
    });
  }

  getCategories(categories: any) {
    return categories?.map((e) => e.text).join(', ');
  }

  getActivities(activity: any) {
    return activity
      ? activity
          .map((e) => e.detail.code.text + ' - ' + e.detail.status)
          .join('<br>')
      : '';
  }
}
