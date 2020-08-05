import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FhirService } from 'src/app/core/services';

@Component({
  selector: 'app-observation-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css'],
})
export class LaboratoryComponent implements OnInit, OnDestroy {
  isLoading = true;
  bundleResult: any;
  observations: any;
  subscriptions: Subscription[] = [];

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all laboratory observations of the patient
    this.subscriptions.push(
      this.service
        .search({
          resourceType: 'Observation',
          params: [
            'category=laboratory',
            '_include=*',
            '_count=1000',
            '_sort=-date',
          ],
        })
        .subscribe((result: any) => {
          this.bundleResult = result.entry;
          this.observations = result.entry.filter(
            (items) => items.resource.resourceType === 'Observation'
          );
          this.isLoading = false;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  getPatientName(patientId: string): string {
    if (!patientId || patientId.length === 0) {
      return '';
    }

    const patient = this.bundleResult.find(
      (e) =>
        e.resource.resourceType === 'Patient' && e.resource.id === patientId
    );

    if (patient) {
      const name = patient.resource.name[0];
      return `${name.prefix ? name.prefix.join(' ') : ''} ${
        name.given ? name.given.join(' ') : ''
      } ${name.family}`;
    }

    return '';
  }

  getValue(resource: any): string {
    if (resource.valueQuantity) {
      return resource.valueQuantity.value + ' ' + resource.valueQuantity.unit; 
    }

    return '';
  }
}
