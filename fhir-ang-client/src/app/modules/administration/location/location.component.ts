import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FhirService } from 'src/app/core/services';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit, OnDestroy {
  isLoading = true;
  bundleResult: any;
  locations: any;
  subscriptions: Subscription[] = [];

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all locations
    this.subscriptions.push(
      this.service
        .search({
          resourceType: 'Location',
          params: ['_include=*', '_count=1000'],
        })
        .subscribe((result: any) => {
          this.bundleResult = result.entry;
          this.locations = this.formList(
            result.entry.filter(
              (items) => items.resource.resourceType === 'Location'
            )
          );
          this.isLoading = false;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  formList(items: any): any[] {
    const list: any[] = [];
    for (const item of items) {
      if (item.resource.name) {
        list.push({
          organization: this.getOrganizationName(
            (item.resource.managingOrganization && item.resource.managingOrganization.reference)
              ? item.resource.managingOrganization.reference.substr(13)
              : null
          ),
          name: item.resource.name ? item.resource.name : '',
          phone: item.resource.telecom ? item.resource.telecom[0].value : '',
          address: this.getAddress(item.resource.address),
          status: item.resource.status,
        });
      }
    }

    return list;
  }

  getAddress(address: any): string {
    if (address) {
      return `${address.line.join(' ')} ${address.city} ${address.state} ${address.postalCode} ${address.country}`;
    }

    return '';
  }

  getOrganizationName(organizationId: string): string {
    if (!organizationId || organizationId.length === 0) {
      return '';
    }

    const organization = this.bundleResult.find(
      (e) =>
        e.resource.resourceType === 'Organization' &&
        e.resource.id === organizationId
    );

    return organization ? organization.resource.name : '';
  }
}
