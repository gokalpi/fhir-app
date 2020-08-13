import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { FhirService } from 'src/app/core/services';
import { TableColumn } from 'src/app/core/models';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
})
export class OrganizationComponent implements OnInit, OnDestroy {
  isLoading = true;
  bundleResult: any;
  organizations: any;
  subscriptions: Subscription[] = [];
  listOfColumns: TableColumn[] = [
    {
      name: 'Name',
      sortOrder: 'ascend',
      sortFn: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      name: 'Type',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.type.localeCompare(b.type),
      filterMultiple: true,
      listOfFilter: [
        { text: 'Clinical Research Sponsor', value: 'crs' },
        { text: 'Community Group', value: 'cg' },
        { text: 'Educational Institute', value: 'edu' },
        { text: 'Government', value: 'govt' },
        { text: 'Healthcare Provider', value: 'prov' },
        { text: 'Hospital Department', value: 'dept' },
        { text: 'Insurance Company', value: 'ins' },
        { text: 'Non-Healthcare Business', value: 'bus' },
        { text: 'Organizational team', value: 'team' },
        { text: 'Payer', value: 'pay' },
        { text: 'Religious Institution', value: 'reli' },
        { text: 'Other', value: 'other' },
      ],
      filterFn: (list: string[], item: any) =>
        list.some((type) => item.typeCode.indexOf(type) !== -1),
    },
    {
      name: 'Phone',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.phone.localeCompare(b.phone),
    },
    {
      name: 'Address',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.address.localeCompare(b.address),
    },
    {
      name: 'Active',
    },
    {
      name: 'Action',
    },
  ];

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
          this.organizations = this.generateList(
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

  generateList(items: any): any[] {
    const list: any[] = [];
    for (const item of items) {
      list.push({
        id: item.resource.id,
        name: item.resource.name ? item.resource.name : '',
        type: item.resource.type ? item.resource.type[0].text : '',
        typeCode: item.resource.type
          ? item.resource.type[0].coding[0].code
          : '',
        phone: item.resource.telecom ? item.resource.telecom[0].value : '',
        address: this.getAddress(item.resource.address[0]),
        active: item.resource.active,
      });
    }

    return list;
  }

  getAddress(address: any): string {
    if (address) {
      return `${address.line ? address.line.join(' ') : ''} ${
        address.city ? address.city : ''
      } ${address.state} ${address.postalCode} ${address.country}`;
    }

    return '';
  }

  onAdd(): void {
    Swal.fire('Added!', `Organization added successfully`, 'success');
  }

  onDelete(organization: any): void {
    Swal.fire(
      'Deleted!',
      `Organization with id ${organization.id} deleted`,
      'success'
    );
  }

  onEdit(organization: any): void {
    console.log(`Editing organization with id ${organization.id}`);
  }
}
