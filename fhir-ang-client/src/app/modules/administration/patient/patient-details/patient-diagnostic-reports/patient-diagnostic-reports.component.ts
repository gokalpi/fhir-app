import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { FhirService } from 'src/app/core/services';


@Component({
  selector: 'app-patient-diagnostic-reports',
  templateUrl: './patient-diagnostic-reports.component.html',
  styleUrls: ['./patient-diagnostic-reports.component.css']
})
export class PatientDiagnosticReportsComponent implements OnInit {
  @Input() patientId: string;
  patientDiagnosticReports$: Observable<any>;

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all diagnotics reports of the patient
    this.patientDiagnosticReports$ = this.service.search({
      resourceType: 'DiagnosticReport',
      params: [`patient=${this.patientId}`, '_sort=-date'],
    });
  }

  getCategories(categories: any) {
    return categories?.map((e) => e.coding[0].display).join(', ');
  }

  getResults(result: any) {
    return result?.map((e) => e.display).join(', ');
  }
}
