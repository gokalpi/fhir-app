import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { FhirService } from 'src/app/core/services';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit, OnDestroy {
  patients: any;
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

    // Get all patients sorted by name
    this.subscriptions.push(
      this.service
        .search({
          resourceType: 'Patient',
          params: ['_sort=name', '_count=10'],
        })
        .subscribe((result: any) => {
          this.patients = this.generateList(result.entry);
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
        name: this.getOfficialName(item.resource.name),
        gender: item.resource.gender,
        birthDate: item.resource.birthDate,
        status: item.resource.status,
      });
    }

    return list;
  }

  getOfficialName(name: any): string {
    if (name) {
      const officialName = name.find((e) => e.use === 'official');
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
        this.patients = this.patients.concat(this.generateList(result.entry));
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
          resourceType: 'Patient',
          params,
        })
        .subscribe((result: any) => {
          this.patients = this.generateList(result.entry);
          this.nextUrl = this.getNextUrl(result);
          this.isLoading = false;
        })
    );
  }

  onAdd(): void {
    Swal.fire('Added!', `Patient added successfully`, 'success');
  }

  onDelete(patient: any): void {
    Swal.fire('Deleted!', `Patient with id ${patient.id} deleted`, 'success');
  }

  onEdit(patient: any): void {
    console.log(`Editing patient with id ${patient.id}`);
  }
}
