import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { FhirService } from 'src/app/core/services';
import { TableColumn } from 'src/app/core/models';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit, OnDestroy {
  isLoading = true;
  bundleResult: any;
  locations: any;
  subscriptions: Subscription[] = [];
  listOfColumns: TableColumn[] = [
    {
      name: 'Organization',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.organization.localeCompare(b.organization),
    },
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
        { text: 'Accident Site', value: 'ACC' },
        { text: 'Addiction Treatment Center', value: 'RHAT' },
        { text: 'Allergy Clinic', value: 'ALL' },
        { text: 'Ambulance', value: 'AMB' },
        { text: 'Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities', value: 'CARD' },
        { text: 'Amputee Clinic', value: 'AMPUT' },
        { text: 'Bone Marrow Transplant Clinic', value: 'BMTC' },
        { text: 'Bone Marrow Transplant Unit', value: 'BMTU' },
        { text: 'Breast Clinic', value: 'BREAST' },
        { text: 'Cardiac Catheterization Lab', value: 'CATH' },
        { text: 'Cardiovascular Diagnostics Or Therapeutics Unit', value: 'CVDX' },
        { text: 'Chest Unit', value: 'CHEST' },
        { text: 'Child And Adolescent Neurology Clinic', value: 'CANC' },
        { text: 'Child And Adolescent Psychiatry Clinic', value: 'CAPC' },
        { text: 'Chronic Care Facility', value: 'CHR' },
        { text: 'Coagulation Clinic', value: 'COAG' },
        { text: 'Colon And Rectal Surgery Clinic', value: 'CRS' },
        { text: 'Community Location', value: 'COMM' },
        { text: 'Community Service Center', value: 'CSC' },
        { text: 'Coronary Care Unit', value: 'CCU' },
        { text: 'Delivery Address', value: 'DADDR' },
        { text: 'Dermatology Clinic', value: 'DERM' },
        { text: 'Diagnostics Or Therapeutics Unit', value: 'DX' },
        { text: 'Echocardiography Lab', value: 'ECHO' },
        { text: 'Emergency Room', value: 'ER' },
        { text: 'Emergency Trauma Unit', value: 'ETU' },
        { text: 'Endocrinology Clinic', value: 'ENDO' },
        { text: 'Endoscopy Lab', value: 'ENDOS' },
        { text: 'Epilepsy Unit', value: 'EPIL' },
        { text: 'Family Medicine Clinic', value: 'FMC' },
        { text: 'Gastroenterology Clinic', value: 'GI' },
        { text: 'Gastroenterology Diagnostics Or Therapeutics Lab', value: 'GIDX' },
        { text: 'General Internal Medicine Clinic', value: 'GIM' },
        { text: 'Gynecology Clinic', value: 'GYN' },
        { text: 'Hand Clinic', value: 'HAND' },
        { text: 'Hematology Clinic', value: 'HEM' },
        { text: 'Hemodialysis Unit', value: 'HD' },
        { text: 'Hospital', value: 'HOSP' },
        { text: 'Hospital Laboratory', value: 'HLAB' },
        { text: 'Hospital Unit', value: 'HU' },
        { text: 'Hospitals; General Acute Care Hospital', value: 'GACH' },
        { text: 'Hypertension Clinic', value: 'HTN' },
        { text: 'Impairment Evaluation Center', value: 'IEC' },
        { text: 'Infectious Disease Clinic', value: 'INFD' },
        { text: 'Infertility Clinic', value: 'INV' },
        { text: 'Intensive Care Unit', value: 'ICU' },
        { text: 'Inpatient Laboratory', value: 'INLAB' },
        { text: 'Inpatient Pharmacy', value: 'INPHARM' },
        { text: 'Intellectual Impairment Center', value: 'RHII' },
        { text: 'Lympedema Clinic', value: 'LYMPH' },
        { text: 'Medical Genetics Clinic', value: 'MGEN' },
        { text: 'Medical Laboratory', value: 'MBL' },
        { text: 'Medical Oncology Clinic', value: 'ONCL' },
        { text: 'Military Hospital', value: 'MHSP' },
        { text: 'Mobile Unit', value: 'MOBL' },
        { text: 'Nephrology Clinic', value: 'NEPH' },
        { text: 'Neurology Clinic', value: 'NEUR' },
        { text: 'Neurology Critical Care And Stroke Unit', value: 'NCCS' },
        { text: 'Neuroradiology Unit', value: 'RNEU' },
        { text: 'Neurosurgery Unit', value: 'NS' },
        { text: 'Nursing Or Custodial Care Facility', value: 'NCCF' },
        { text: 'Obstetrics Clinic', value: 'OB' },
        { text: 'Opthalmology Clinic', value: 'OPH' },
        { text: 'Optometry Clinic', value: 'OPTC' },
        { text: 'Oral And Maxillofacial Surgery Clinic', value: 'OMS' },
        { text: 'Orthopedics Clinic', value: 'ORTHO' },
        { text: 'Otorhinolaryngology Clinic', value: 'ENT' },
        { text: 'Outpatient Facility', value: 'OF' },
        { text: 'Outpatient Laboratory', value: 'OUTLAB' },
        { text: 'Outpatient Pharmacy', value: 'OUTPHARM' },
        { text: 'Pain Clinic', value: 'PAINCL' },
        { text: 'Pain Rehabilitation Center', value: 'PRC' },
        { text: 'Parents With Adjustment Difficulties Center', value: 'RHMAD' },
        { text: 'Patients Residence', value: 'PTRES' },
        { text: 'Pediatric Cardiology Clinic', value: 'PEDCARD' },
        { text: 'Pediatric Endocrinology Clinic', value: 'PEDE' },
        { text: 'Pediatric Gastroenterology Clinic', value: 'PEDGI' },
        { text: 'Pediatric Hematology Clinic', value: 'PEDHEM' },
        { text: 'Pediatric Infectious Disease Clinic', value: 'PEDID' },
        { text: 'Pediatric Intensive Care Unit', value: 'PEDICU' },
        { text: 'Pediatric Neonatal Intensive Care Unit', value: 'PEDNICU' },
        { text: 'Pediatric Nephrology Clinic', value: 'PEDNEPH' },
        { text: 'Pediatric Oncology Clinic', value: 'PEDHO' },
        { text: 'Pediatric Rheumatology Clinic', value: 'PEDRHEUM' },
        { text: 'Pediatric Unit', value: 'PEDU' },
        { text: 'Pediatrics Clinic', value: 'PEDC' },
        { text: 'Pharmacy', value: 'PHARM' },
        { text: 'Physical Impairment - Hearing Center', value: 'RHPIH' },
        { text: 'Physical Impairment - Motor Skills Center', value: 'RHPIMS' },
        { text: 'Physical Impairment - Visual Skills Center', value: 'RHPIVS' },
        { text: 'Physical Impairment Center', value: 'RHPI' },
        { text: 'Plastic Surgery Clinic', value: 'PLS' },
        { text: 'Podiatry Clinic', value: 'POD' },
        { text: 'Preventive Medicine Clinic', value: 'PREV' },
        { text: 'Primary Care Clinic', value: 'PC' },
        { text: 'Proctology Clinic', value: 'PROCTO' },
        { text: 'Prosthodontics Clinic', value: 'PROS' },
        { text: 'Providers Office', value: 'PROFF' },
        { text: 'Psychatric Care Facility', value: 'PSYCHF' },
        { text: 'Psychiatric Hospital Unit', value: 'PHU' },
        { text: 'Psychiatry Clinic', value: 'PSY' },
        { text: 'Psychology Clinic', value: 'PSI' },
        { text: 'Radiation Oncology Unit', value: 'RADO' },
        { text: 'Radiology Diagnostics Or Therapeutics Unit', value: 'RADDX' },
        { text: 'Radiology Unit', value: 'HRAD' },
        { text: 'Rehabilitation Hospital', value: 'RH' },
        { text: 'Rehabilitation Hospital Unit', value: 'RHU' },
        { text: 'Residential Treatment Facility', value: 'RTF' },
        { text: 'Rheumatology Clinic', value: 'RHEUM' },
        { text: 'School', value: 'SCHOOL' },
        { text: 'Skilled Nursing Facility', value: 'SNF' },
        { text: 'Sleep Disorders Unit', value: 'SLEEP' },
        { text: 'Specimen Collection Site', value: 'HUSCS' },
        { text: 'Sports Medicine Clinic', value: 'SPMED' },
        { text: 'Substance Use Rehabilitation Facility', value: 'SURF' },
        { text: 'Surgery Clinic', value: 'SU' },
        { text: 'Transplant Clinic', value: 'TR' },
        { text: 'Travel And Geographic Medicine Clinic', value: 'TRAVEL' },
        { text: 'Underage Protection Center', value: 'UPC' },
        { text: 'Urology Clinic', value: 'URO' },
        { text: 'Work Site', value: 'WORK' },
        { text: 'Wound Clinic', value: 'WND' },
        { text: 'Youths With Adjustment Difficulties Center', value: 'RHYAD' },
      ],
      filterFn: (list: string[], item: any) =>
        list.some((type) => item.typeCode.indexOf(type) !== -1),
    },
    {
      name: 'Operational Status',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.operationalStatus.localeCompare(b.status),
      filterMultiple: true,
      listOfFilter: [
        { text: 'Contaminated', value: 'K' },
        { text: 'Closed', value: 'C' },
        { text: 'Housekeeping', value: 'H' },
        { text: 'Isolated', value: 'I' },
        { text: 'Occupied', value: 'O' },
        { text: 'Unoccupied', value: 'U' },
      ],
      filterFn: (list: string[], item: any) =>
        list.some((code) => item.operationalStatusCode.indexOf(code) !== -1),
    },
    {
      name: 'Status',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.status.localeCompare(b.status),
      filterMultiple: true,
      listOfFilter: [
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' },
        { text: 'Suspended', value: 'suspended' },
      ],
      filterFn: (list: string[], item: any) =>
        list.some((status) => item.status.indexOf(status) !== -1),
    },
    {
      name: 'Action',
    },
  ];

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all locations
    this.subscriptions.push(
      this.service
        .search({
          resourceType: 'Location',
          params: ['_include=*', '_count=1000'],
        })
        .subscribe((result: any) => {
          console.log('Locations', result.entry);
          this.bundleResult = result.entry;
          this.locations = this.generateList(
            result.entry.filter(
              (items) => items.resource.resourceType === 'Location'
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
      if (item.resource.name) {
        list.push({
          id: item.resource.id,
          organization: this.getOrganizationName(
            (item.resource.managingOrganization && item.resource.managingOrganization.reference)
              ? item.resource.managingOrganization.reference.substr(13)
              : null
          ),
          name: item.resource.name ? item.resource.name : '',
          typeCode: item.resource.type ? item.resource.type[0].coding[0].code : '',
          type: item.resource.type ? item.resource.type[0].coding[0].display : '',
          operationalStatusCode: item.resource.operationalStatus ? item.resource.operationalStatus.coding[0].code : '',
          operationalStatus: item.resource.operationalStatus ? item.resource.operationalStatus.coding[0].display : '',
          status: item.resource.status,
        });
      }
    }

    return list;
  }

  getAddress(address: any): string {
    if (address) {
      return `${address.line.join(' ')} ${address.city} ${address.state} ${address.postalCode} ${address.country}`;
    }

    return '';
  }

  getOrganizationName(organizationId: string): string {
    if (!organizationId || organizationId.length === 0) {
      return '';
    }

    const organization = this.bundleResult.find(
      (e) =>
        e.resource.resourceType === 'Organization' &&
        e.resource.id === organizationId
    );

    return organization ? organization.resource.name : '';
  }

  onAdd(): void {
    Swal.fire('Added!', `Location added successfully`, 'success');
  }

  onDelete(location: any): void {
    Swal.fire('Deleted!', `Location with id ${location.id} deleted`, 'success');
  }

  onEdit(location: any): void {
    console.log(`Editing location with id ${location.id}`);
  }
}