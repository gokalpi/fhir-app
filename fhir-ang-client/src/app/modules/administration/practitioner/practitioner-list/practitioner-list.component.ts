import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { FhirService } from 'src/app/core/services';

@Component({
  selector: 'app-practitioner-list',
  templateUrl: './practitioner-list.component.html',
  styleUrls: ['./practitioner-list.component.css'],
})
export class PractitionerListComponent implements OnInit, OnDestroy {
  practitioners: any;
  subscriptions: Subscription[] = [];
  isLoading = true;
  loadingMore = false;
  submitted = false;
  nextUrl = '';
  filterForm!: FormGroup;

  constructor(private service: FhirService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      name: [null],
      gender: [null],
      sort: [null],
      pageLength: [null],
    });

    // Get all practitioners
    this.subscriptions.push(
      this.service
        .search({
          resourceType: 'Practitioner',
          params: ['_sort=name', '_count=10'],
        })
        .subscribe((result: any) => {
          this.practitioners = this.generateList(result.entry);
          this.nextUrl = this.getNextUrl(result);
          this.isLoading = false;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  // convenience getter for easy access to form fields
  get f(): any {
    return this.filterForm.controls;
  }

  generateList(items: any): any[] {
    const list: any[] = [];
    for (const item of items) {
      list.push({
        id: item.resource.id,
        name: this.getFullName(item.resource.name),
        gender: item.resource.gender,
        address: this.getAddress(item.resource.address),
        status: item.resource.status,
      });
    }

    return list;
  }

  getAddress(address: any): string {
    if (address && address[0]) {
      return `${address[0].line ? address[0].line.join(' ') : ''} ${
        address[0].postalCode
      } ${address[0].city} ${address[0].state} ${address[0].country}`;
    }
  }

  getFullName(name: any): string {
    if (name && name[0]) {
      const officialName = name[0];
      if (officialName) {
        return `${officialName.prefix ? officialName.prefix.join(' ') : ''} ${
          officialName.given ? officialName.given.join(' ') : ''
        } ${officialName.family}`;
      }
    }
    return '';
  }

  getNextUrl(item: any): string {
    if (item) {
      const nextLink = item.link.find((l) => l.relation === 'next');
      return nextLink ? nextLink.url : '';
    }
    return '';
  }

  onLoadMore(): void {
    this.loadingMore = true;

    this.subscriptions.push(
      this.service.getByUrl(this.nextUrl).subscribe((result: any) => {
        this.practitioners = this.practitioners.concat(this.generateList(result.entry));
        this.nextUrl = this.getNextUrl(result);
        this.loadingMore = false;
      })
    );
  }

  submitForm(): void {
    const params: string[] = [];

    if (this.f.name.value) {
      params.push(`name=${this.f.name.value}`);
    }

    if (this.f.gender.value) {
      params.push(`gender=${this.f.gender.value}`);
    }

    if (this.f.sort.value) {
      params.push(`_sort=${this.f.sort.value}`);
    }

    if (this.f.pageLength.value) {
      params.push(`_count=${this.f.pageLength.value}`);
    }

    this.subscriptions.push(
      this.service
        .search({
          resourceType: 'Practitioner',
          params,
        })
        .subscribe((result: any) => {
          this.practitioners = this.generateList(result.entry);
          this.nextUrl = this.getNextUrl(result);
          this.isLoading = false;
        })
    );
  }

  onAdd(): void {
    Swal.fire('Added!', `Practitioner added successfully`, 'success');
  }

  onDelete(practitioner: any): void {
    Swal.fire(
      'Deleted!',
      `Practitioner with id ${practitioner.id} deleted`,
      'success'
    );
  }

  onEdit(practitioner: any): void {
    console.log(`Editing practitioner with id ${practitioner.id}`);
  }
}
