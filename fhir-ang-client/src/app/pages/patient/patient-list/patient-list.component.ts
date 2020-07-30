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
  selectedValue = { label: '10', value: '10' };

  constructor(
    private service: FhirService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      name: [null],
      gender: [null],
      sort: [null],
      pageLength: [null],
    });
    this.getPatients();
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
    this.service.getPatients().subscribe((res) => {
      this.nextUrl = this.getNextUrl(res);
      this.patients = res.entry;
      this.initLoading = false;
    });
  }

  onLoadMore() {
    this.loadingMore = true;

    this.service.getResources(this.nextUrl).subscribe((res: any) => {
      this.patients = this.patients.concat(res.entry);
      this.nextUrl = this.getNextUrl(res);
      this.loadingMore = false;
    });
  }

  submitForm() {
    let url = '';
    let criteria: string[] = [];

    if (this.validateForm.controls.name.value) {
      criteria.push(`name=${this.validateForm.controls.name.value}`);
    }

    if (this.validateForm.controls.gender.value) {
      criteria.push(`gender=${this.validateForm.controls.gender.value}`);
    }

    if (this.validateForm.controls.sort.value) {
      criteria.push(`_sort=${this.validateForm.controls.sort.value}`);
    }

    if (this.validateForm.controls.pageLength.value) {
      criteria.push(`_count=${this.validateForm.controls.pageLength.value}`);
      this.selectedValue = this.validateForm.controls.pageLength.value;
    }

    url = `${environment.fhirApiUrl}/Patient/_search`;

    if (criteria.length > 0) {
      url = url + '?' + criteria.join('&');
    }

    this.service.getResources(url).subscribe((res) => {
      console.log('Search result', res);
      this.nextUrl = this.getNextUrl(res);
      this.patients = res.entry;
      this.initLoading = false;
    });
  }
}
