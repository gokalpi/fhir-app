import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FhirService } from 'src/app/core/services';
import { FhirResource } from 'src/app/core/models';

@Component({
  selector: 'app-practitioner-list',
  templateUrl: './practitioner-list.component.html',
  styleUrls: ['./practitioner-list.component.css'],
})
export class PractitionerListComponent implements OnInit, OnDestroy {
  initLoading = true;
  loadingMore = false;
  submitted = false;
  nextUrl = '';
  practitioners: FhirResource[] = [];
  validateForm!: FormGroup;

  constructor(private service: FhirService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      name: [null],
      gender: [null],
      sort: [null],
      pageLength: [null],
    });

    // Get all practitioners
    this.getPractitioners();
  }

  ngOnDestroy() {}

  // convenience getter for easy access to form fields
  get f() {
    return this.validateForm.controls;
  }

  getAddress(addresses: any) {
    const address = addresses[0];
    return `${address?.line.join(' ')} ${address?.postalCode} ${
      address?.city
    } ${address?.state} ${address?.country}`;
  }

  getAvatar(gender: any) {
    return gender === 'male'
      ? '/assets/img/male.svg'
      : '/assets/img/female.svg';
  }

  getFullName(names: any) {
    if (!names) { return ''; }

    const name = names[0];
    if (!name) { return ''; }

    return `${name.prefix ? name.prefix.join(' ') : ''} ${name.given ? name.given.join(' ') : ''} ${name?.family}`;
  }

  getNextUrl(result: any): string {
    const nextLink = result.link
      ? result.link.find((l) => {
          return l.relation === 'next';
        })
      : '';
    return nextLink ? nextLink.url : '';
  }

  getPractitioners() {
    this.service
      .search({
        resourceType: 'Practitioner',
        params: ['_sort=name', '_count=10'],
      })
      .subscribe((res) => {
        this.nextUrl = this.getNextUrl(res);
        this.practitioners = res.entry;
        this.initLoading = false;
      });
  }

  onLoadMore() {
    this.loadingMore = true;

    this.service.getByUrl(this.nextUrl).subscribe((res: any) => {
      this.practitioners = this.practitioners.concat(res.entry);
      this.nextUrl = this.getNextUrl(res);
      this.loadingMore = false;
    });
  }

  submitForm() {
    let params: string[] = [];

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

    this.service
      .search({
        resourceType: 'Patient',
        params,
      })
      .subscribe((res) => {
        this.nextUrl = this.getNextUrl(res);
        this.practitioners = res.entry;
        this.initLoading = false;
      });
  }
}
