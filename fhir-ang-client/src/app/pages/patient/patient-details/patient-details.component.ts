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
  surveyObservations$: Observable<any>;
  vitalSignObservations$: Observable<any>;
  laboratoryObservations$: Observable<any>;
  medications$: Observable<any>;
  procedures$: Observable<any>;
  diagnosticReports$: Observable<any>;
  encounters$: Observable<any>;

  constructor(private service: FhirService, private actRoute: ActivatedRoute) {
    this.patientId = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    // Get all information about the patient
    this.patient$ = this.service.read({
      resourceType: 'Patient',
      id: this.patientId,
    });

    // Get all survey observations of the patient
    this.surveyObservations$ = this.service.search({
      resourceType: 'Observation',
      params: [
        `patient=${this.patientId}`,
        'category=survey',
        '_sort=code,-date',
      ],
    });

    // Get all vital sign observations of the patient
    this.vitalSignObservations$ = this.service.search({
      resourceType: 'Observation',
      params: [
        `patient=${this.patientId}`,
        'category=vital-signs',
        '_sort=code,-date',
      ],
    });

    // Get all laboratory observations of the patient
    this.laboratoryObservations$ = this.service.search({
      resourceType: 'Observation',
      params: [
        `patient=${this.patientId}`,
        'category=laboratory',
        '_sort=code,-date',
      ],
    });

    // // Get all medications of the patient
    // this.medications$ = this.service.search({
    //   resourceType: 'Medication',
    //   params: [`patient=${this.patientId}`],
    // });

    // // Get all procedures of the patient
    // this.procedures$ = this.service.search({
    //   resourceType: 'Procedure',
    //   params: [`patient=${this.patientId}`],
    // });

    // // Get all diagnostic reports of the patient
    // this.diagnosticReports$ = this.service.search({
    //   resourceType: 'DiagnosticReport',
    //   params: [`patient=${this.patientId}`],
    // });

    // // Get all encounters of the patient
    // this.encounters$ = this.service.search({
    //   resourceType: 'Encounter',
    //   params: [`patient=${this.patientId}`],
    // });
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

  // getAddress() {
  //   if (this.patient && this.patient.address) {
  //     const address = this.patient.address[0];
  //     this.patientAddress = `${address.line ? address.line.join(' ') : ''} ${
  //       address.postalCode
  //     } ${address.city} ${address.state} ${address.country}`;
  //   }
  // }

  // getAvatar() {
  //   if (this.patient) {
  //     this.patientAvatar =
  //       this.patient.gender === 'male'
  //         ? '/assets/img/male.svg'
  //         : '/assets/img/female.svg';
  //   }
  // }

  // getIdentifiers() {
  //   if (this.patient && this.patient.identifier) {
  //     for (let index = 0; index < this.patient.identifier.length; index++) {
  //       const element = this.patient.identifier[index];
  //       this.patientIdentifiers;
  //     }
  //     this.patientAvatar =
  //       this.patient.gender === 'male'
  //         ? '/assets/img/male.svg'
  //         : '/assets/img/female.svg';
  //   }
  // }

  getFullName(names: any) {
    let name = names[0];
    return `${name.prefix ? name.prefix.join(' ') : ''} ${name.given.join(
      ' '
    )} ${name.family}`;
  }

  // getPhone() {
  //   if (this.patient && this.patient.name) {
  //     this.patientAvatar =
  //       this.patient.gender === 'male'
  //         ? '/assets/img/male.svg'
  //         : '/assets/img/female.svg';
  //   }
  // }
}
