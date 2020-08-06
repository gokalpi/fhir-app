import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { FhirService } from 'src/app/core/services';
import { TableColumn } from 'src/app/core/models';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit, OnDestroy {
  isLoading = true;
  bundleResult: any;
  accounts: any;
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
        { text: 'Patient', value: 'patient' },
        { text: 'Expense', value: 'expense' },
        { text: 'Depreciation', value: 'depreciation' },
      ],
      filterFn: (list: string[], item: any) =>
        list.some((type) => item.type.indexOf(type) !== -1),
    },
    {
      name: 'Start Date',
      sortOrder: null,
      // sortFn: (a: any, b: any) => new Date(a.start) - new Date(b.start),
    },
    {
      name: 'Status',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.status.localeCompare(b.status),
      filterMultiple: true,
      listOfFilter: [
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' },
        { text: 'Entered in Error', value: 'entered-in-error' },
        { text: 'On Hold', value: 'on-hold' },
        { text: 'Unknown', value: 'unknown' },
      ],
      filterFn: (list: string[], item: any) =>
        list.some((status) => item.status.indexOf(status) !== -1),
    },
    {
      name: 'Action'
    },
  ];

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all accounts
    this.subscriptions.push(
      this.service
        .search({
          resourceType: 'Account',
          params: ['_include=*', '_count=1000'],
        })
        .subscribe((result: any) => {
          this.bundleResult = result.entry;
          this.accounts = this.generateList(
            result.entry.filter(
              (items) => items.resource.resourceType === 'Account'
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
        name: item.resource.subject[0].display,
        type: item.resource.type.text,
        start: item.resource.servicePeriod
          ? item.resource.servicePeriod.start
          : '',
        status: item.resource.status,
      });
    }

    return list;
  }

  onAdd(): void {
    Swal.fire('Added!', `Account added successfully`, 'success');
  }

  onDelete(account: any): void {
    Swal.fire('Deleted!', `Account with id ${account.id} deleted`, 'success');
  }

  onEdit(account: any): void {
    console.log(`Editing account with id ${account.id}`);
  }
}
