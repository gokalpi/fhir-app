import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { FhirService } from '../../../../core/services';

@Component({
  selector: 'app-patient-care-plans',
  templateUrl: './patient-care-plans.component.html',
  styleUrls: ['./patient-care-plans.component.css'],
})
export class PatientCarePlansComponent implements OnInit {
  @Input() patientId: string;
  patientCarePlans$: Observable<any>;

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all care plans of the patient
    this.patientCarePlans$ = this.service.search({
      resourceType: 'CarePlan',
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
