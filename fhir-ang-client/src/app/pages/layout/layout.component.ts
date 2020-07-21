import { Component } from '@angular/core';
import { User } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  user: User;

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
          url: '/my-schedule',
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
          url: '/patients',
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: 'Add Patient',
          url: '/patients/add',
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
          url: '/examinations',
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: 'Add Examination',
          url: '/examinations/add',
          selected: false,
          disabled: false,
        },
      ],
    },
  ];

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
