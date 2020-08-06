import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FhirService } from 'src/app/core/services';

@Component({
  selector: 'app-practitioner-details',
  templateUrl: './practitioner-details.component.html',
  styleUrls: ['./practitioner-details.component.css'],
})
export class PractitionerDetailsComponent implements OnInit {
  practitionerId: string;
  practitioner$: Observable<any>;

  constructor(private service: FhirService, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.practitionerId = this.actRoute.snapshot.params.id;

    // Get all information about the practitioner
    this.practitioner$ = this.service.read({
      resourceType: 'Practitioner',
      id: this.practitionerId,
    });
  }

  getAddress(addresses: any): string {
    const address = addresses[0];
    return `${address.line ? address.line.join(' ') : ''} ${
      address.postalCode
    } ${address.city} ${address.state} ${address.country}`;
  }

  getFullName(names: any): string {
    const name = names[0];
    return `${name.prefix ? name.prefix.join(' ') : ''} ${name.given.join(
      ' '
    )} ${name.family}`;
  }
}
