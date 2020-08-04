import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

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
          this.practitioners = result.entry;
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

  getAddress(address: any): string {
    if (!address || address.length <= 0) {
      return '';
    }
    return `${address[0]?.line.join(' ')} ${address[0]?.postalCode} ${
      address[0]?.city
    } ${address[0]?.state} ${address[0]?.country}`;
  }

  getFullName(name: any): string {
    const officialName = name[0];
    return `${
      officialName.prefix ? officialName.prefix.join(' ') : ''
    } ${officialName.given.join(' ')} ${officialName.family}`;
  }

  getNextUrl(item: any): string {
    if (!item || !item.link) {
      return '';
    }

    const nextLink = item.link.find((l) => l.relation === 'next');
    return nextLink ? nextLink.url : '';
  }

  onLoadMore(): void {
    this.loadingMore = true;

    this.subscriptions.push(
      this.service.getByUrl(this.nextUrl).subscribe((result: any) => {
        this.practitioners = this.practitioners.concat(result.entry);
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
          this.practitioners = result.entry;
          this.nextUrl = this.getNextUrl(result);
          this.isLoading = false;
        })
    );
  }
}
