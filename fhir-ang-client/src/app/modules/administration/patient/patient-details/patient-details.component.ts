import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FhirService } from 'src/app/core/services';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent implements OnInit {
  patientId: string;
  patient$: Observable<any>;

  constructor(private service: FhirService, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.patientId = this.actRoute.snapshot.params.id;

    // Get all information about the patient
    this.patient$ = this.service.read({
      resourceType: 'Patient',
      id: this.patientId,
    });
  }

  getAddress(address: any): string {
    if (address && address[0]) {
      return `${address[0].line ? address[0].line.join(' ') : ''} ${
        address[0].postalCode
      } ${address[0].city} ${address[0].state} ${address[0].country}`;
    }
  }

  getOfficialName(name: any): string {
    if (name) {
      const officialName = name.find((e) => e.use === 'official');
      if (officialName) {
        return `${officialName.prefix ? officialName.prefix.join(' ') : ''} ${
          officialName.given ? officialName.given.join(' ') : ''
        } ${officialName.family}`;
      }
    }
    return '';
  }
}
