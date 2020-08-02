import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FhirService } from '../../../core/services';
import { FhirResource } from 'src/app/core/models';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  initLoading = true;
  loadingMore = false;
  submitted = false;
  nextUrl = '';
  patients: FhirResource[] = [];
  validateForm!: FormGroup;
  isCollapse = true;

  constructor(private service: FhirService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      name: [null],
      gender: [null],
      sort: [null],
      pageLength: [null],
    });

    this.getPatients();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.validateForm.controls;
  }

  getAvatar(patient: any) {
    return patient.resource.gender === 'male'
      ? '/assets/img/male.svg'
      : '/assets/img/female.svg';
  }

  getFullName(patient: any): string {
    const officialName = patient.resource.name[0];
    let fullName = `${
      officialName.prefix ? officialName.prefix.join(' ') : ''
    } ${officialName.given.join(' ')} ${officialName.family}`;
    return fullName;
  }

  getNextUrl(result: any): string {
    let nextLink = result.link
      ? result.link.find((l) => {
          return l.relation === 'next';
        })
      : '';
    return nextLink ? nextLink.url : '';
  }

  getPatients() {
    this.service
      .search({
        resourceType: 'Patient',
        params: ['_sort=name', '_count=10'],
      })
      .subscribe((res) => {
        this.nextUrl = this.getNextUrl(res);
        this.patients = res.entry;
        this.initLoading = false;
      });
  }

  onLoadMore() {
    this.loadingMore = true;

    this.service.getByUrl(this.nextUrl).subscribe((res: any) => {
      this.patients = this.patients.concat(res.entry);
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
        params: params,
      })
      .subscribe((res) => {
        this.nextUrl = this.getNextUrl(res);
        this.patients = res.entry;
        this.initLoading = false;
      });
  }
}
