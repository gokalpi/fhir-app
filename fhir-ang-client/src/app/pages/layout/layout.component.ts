import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  isCollapsed = false;

  mode = false;
  dark = false;
  menus = [
    {
      level: 1,
      title: 'Dashboard',
      icon: 'dashboard',
      open: true,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'My Schedule',
          url: '/pages/schedule',
          selected: true,
          disabled: false,
        },
      ],
    },
    {
      level: 1,
      title: 'Patients',
      icon: 'team',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'List Patients',
          url: '/pages/patients',
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: 'Add Patient',
          url: '/pages/patients/add',
          selected: false,
          disabled: false,
        },
      ],
    },
    {
      level: 1,
      title: 'Examinations',
      icon: 'read',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'List Examinations',
          url: '/pages/examinations',
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: 'Add Examination',
          url: '/pages/examinations/add',
          selected: false,
          disabled: false,
        },
      ],
    },
  ];
}