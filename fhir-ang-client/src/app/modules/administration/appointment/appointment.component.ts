import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

import { FhirService } from 'src/app/core/services';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointments: any;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'timeGridDay',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-08-02 08:00' },
      { title: 'event 2', date: '2020-08-03 11:00' },
    ],
  };

  constructor(private service: FhirService) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.service
      .search({
        resourceType: 'Appointment',
        params: ['_sort=-date', '_count=100'],
      })
      .subscribe((res) => {
        this.appointments = res.entry;
      });
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }
}
