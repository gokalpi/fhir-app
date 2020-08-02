import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FhirService } from '../../../core/services';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent implements OnInit {
  initLoading = true;
  patientId: string;
  patient$: Observable<any>;

  constructor(private service: FhirService, private actRoute: ActivatedRoute) {
    this.patientId = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    // Get all information about the patient
    this.patient$ = this.service.read({
      resourceType: 'Patient',
      id: this.patientId,
    });
  }

  getAddress(addresses: any) {
    const address = addresses[0];
    return `${address.line ? address.line.join(' ') : ''} ${
      address.postalCode
    } ${address.city} ${address.state} ${address.country}`;
  }

  getAvatar(gender: any) {
    return gender === 'male'
      ? '/assets/img/male.svg'
      : '/assets/img/female.svg';
  }

  getFullName(names: any) {
    let name = names[0];
    return `${name.prefix ? name.prefix.join(' ') : ''} ${name.given.join(
      ' '
    )} ${name.family}`;
  }
}
