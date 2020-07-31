import { Component, OnInit } from '@angular/core';

import { FhirService } from '../../../core/services';
import { FhirResource } from 'src/app/core/models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';

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

  getAvatar(patient: any): string {
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
        console.log('Patient result', res);
        this.nextUrl = this.getNextUrl(res);
        this.patients = res.entry;
        this.initLoading = false;
      });
  }

  onLoadMore() {
    this.loadingMore = true;

    this.service.getByUrl(this.nextUrl).subscribe((res: any) => {
      console.log('onLoadMore Result:', res);
      this.patients = this.patients.concat(res.entry);
      this.nextUrl = this.getNextUrl(res);
      this.loadingMore = false;
    });
  }

  submitForm() {
    console.log('submitForm');
    let params: string[] = [];

    if (this.validateForm.controls.name.value) {
      params.push(`name=${this.validateForm.controls.name.value}`);
    }

    if (this.validateForm.controls.gender.value) {
      params.push(`gender=${this.validateForm.controls.gender.value}`);
    }

    if (this.validateForm.controls.sort.value) {
      params.push(`_sort=${this.validateForm.controls.sort.value}`);
    }

    if (this.validateForm.controls.pageLength.value) {
      params.push(`_count=${this.validateForm.controls.pageLength.value}`);
    }

    this.service
      .search({
        resourceType: 'Patient',
        params: params,
      })
      .subscribe((res) => {
        console.log('Result', res);
        this.nextUrl = this.getNextUrl(res);
        this.patients = res.entry;
        this.initLoading = false;
      });

    // if (this.validateForm.controls.name.value) {
    //   criteria.push(`name=${this.validateForm.controls.name.value}`);
    // }

    // if (this.validateForm.controls.gender.value) {
    //   criteria.push(`gender=${this.validateForm.controls.gender.value}`);
    // }

    // if (this.validateForm.controls.sort.value) {
    //   criteria.push(`_sort=${this.validateForm.controls.sort.value}`);
    // }

    // if (this.validateForm.controls.pageLength.value) {
    //   criteria.push(`_count=${this.validateForm.controls.pageLength.value}`);
    //   this.pageSize = this.validateForm.controls.pageLength.value;
    // }

    // url = `${environment.fhirApiUrl}/Patient/_search`;

    // if (criteria.length > 0) {
    //   url = url + '?' + criteria.join('&');
    // }

    // this.service.getByUrl(url).subscribe((res) => {
    //   console.log('Result', res);
    //   this.nextUrl = this.getNextUrl(res);
    //   // this.patients = res.entry;
    //   this.initLoading = false;
    // });
  }
}
