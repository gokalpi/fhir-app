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
      roles: ['Doctor', 'Admin'],
      children: [
        {
          level: 2,
          title: 'My Schedule',
          url: '/my-schedule',
          selected: true,
          disabled: false,
          roles: ['Doctor'],
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
      roles: ['Doctor', 'Admin'],
      children: [
        {
          level: 2,
          title: 'List Patients',
          url: '/patients',
          selected: false,
          disabled: false,
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Add Patient',
          url: '/patients/add',
          selected: false,
          disabled: false,
          roles: ['Doctor', 'Admin'],
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
      roles: ['Doctor', 'Admin'],
      children: [
        {
          level: 2,
          title: 'List Examinations',
          url: '/examinations',
          selected: false,
          disabled: false,
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Add Examination',
          url: '/examinations/add',
          selected: false,
          disabled: false,
          roles: ['Doctor', 'Admin'],
        },
      ],
    },
    {
      level: 1,
      title: 'Settings',
      icon: 'setting',
      open: false,
      selected: false,
      disabled: false,
      roles: ['Admin'],
      children: [
        {
          level: 2,
          title: 'Users',
          icon: 'team',
          open: false,
          selected: false,
          disabled: false,
          roles: ['Admin'],
          children: [
            {
              level: 3,
              title: 'List Users',
              url: '/admin/users',
              selected: false,
              disabled: false,
              roles: ['Admin'],
            },
            {
              level: 3,
              title: 'Add User',
              url: '/admin/users/add',
              selected: false,
              disabled: false,
              roles: ['Admin'],
            },
          ],
        },
        {
          level: 2,
          title: 'Roles',
          icon: 'safety-certificate',
          open: false,
          selected: false,
          disabled: false,
          roles: ['Admin'],
          children: [
            {
              level: 3,
              title: 'List Roles',
              url: '/admin/roles',
              selected: false,
              disabled: false,
              roles: ['Admin'],
            },
            {
              level: 3,
              title: 'Add Role',
              url: '/admin/roles/add',
              selected: false,
              disabled: false,
              roles: ['Admin'],
            },
          ],
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
