import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FhirService } from 'src/app/core/services';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
})
export class OrganizationComponent implements OnInit, OnDestroy {
  isLoading = true;
  organizations: any;
  subscriptions: Subscription[] = [];

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all organizations
    this.subscriptions.push(
      this.service
        .search({
          resourceType: 'Organization',
          params: ['_include=*', '_count=1000'],
        })
        .subscribe((result: any) => {
          console.log('Organizations', result.entry);
          this.organizations = this.formList(
            result.entry.filter(
              (items) => items.resource.resourceType === 'Organization'
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
      list.push({
        name: item.resource.name ? item.resource.name : '',
        type: item.resource.type ? item.resource.type[0].text : '',
        phone: item.resource.telecom ? item.resource.telecom[0].value : '',
        address: this.getAddress(item.resource.address[0]),
        active: item.resource.active,
      });
    }

    return list;
  }

  getAddress(address: any): string {
    if (address) {
      return `${address.line ? address.line.join(' ') : ''} ${address.city ? address.city : ''} ${address.state} ${
        address.postalCode
      } ${address.country}`;
    }

    return '';
  }
}
