import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendarOptions } from '@fullcalendar/angular';

import { FhirService } from 'src/app/core/services';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css'],
})
export class EncounterComponent implements OnInit {
  isLoading = true;
  bundleResult: any;
  encounters: any;
  subscriptions: Subscription[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'timeGridDay',
    dateClick: this.handleDateClick.bind(this),
    slotDuration: '00:15:00',
  };

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    // Get all encounters sorted by date
    this.subscriptions.push(
      this.service
        .search({
          resourceType: 'Encounter',
          params: ['_include=*', '_sort=-date', '_count=10'],
        })
        .subscribe((result: any) => {
          this.bundleResult = result.entry;
          this.encounters = result.entry.filter(
            (items) => items.resource.resourceType === 'Encounter'
          );

          const events = this.encounters
            .filter((e) => e.resource.period)
            .map((e) => {
              return {
                id: e.resource.id,
                title: this.getPatientName(e.resource.subject.reference.substr(8)),
                start: e.resource.period.start,
                end: e.resource.period.end,
                url: `/administration/encounters/${e.resource.id}`,
              };
            });

          this.calendarOptions.events = events;
          this.isLoading = false;
        })
    );
  }

  getPatientName(patientId: string): string {
    if (!patientId || patientId.length === 0) {
      return '';
    }

    const patient = this.bundleResult.find(
      (e) =>
        e.resource.resourceType === 'Patient' && e.resource.id === patientId
    );

    if (patient) {
      if (patient.resource.name) {
        const name = patient.resource.name[0];
        return `${name.prefix ? name.prefix.join(' ') : ''} ${
          name.given ? name.given.join(' ') : ''
        } ${name.family}`;
      }
    }

    return '';
  }

  handleDateClick(arg: any): void {
    alert('date click! ' + arg.dateStr);
  }
}
