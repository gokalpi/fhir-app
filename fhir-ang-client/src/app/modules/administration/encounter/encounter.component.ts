import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

import { FhirService } from 'src/app/core/services';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css'],
})
export class EncounterComponent implements OnInit {
  encounters: any;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'timeGridDay',
    dateClick: this.handleDateClick.bind(this),
    slotDuration: '00:15:00'
  };

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    this.getEncounters();
  }

  getEncounters() {
    this.service
      .search({
        resourceType: 'Encounter',
        params: ['_sort=-date', '_count=100'],
      })
      .subscribe((res) => {
        this.encounters = res.entry;
        console.log('Encounters', this.encounters);

        let events = this.encounters.map(function(encounter) {
          return {
            id: encounter.resource.id,
            title: encounter.resource.type[0].text,
            start: encounter.resource.period.start,
            end: encounter.resource.period.end,
            url: `/administration/encounters/${encounter.resource.id}`,
          };
        });

        this.calendarOptions.events = events;
      });
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }
}
