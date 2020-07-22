import { Component, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.css'],
})
export class MyScheduleComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'timeGridDay',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-07-22 08:00' },
      { title: 'event 2', date: '2020-07-22 11:00' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }
}
