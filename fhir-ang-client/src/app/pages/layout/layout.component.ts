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

  menus = [
    {
      level: 1,
      title: 'Dashboard',
      icon: 'dashboard',
      url: '/dashboard',
    },
    {
      level: 1,
      title: 'Patients',
      icon: 'team',
      url: '/patients',
      roles: ['Doctor', 'Admin'],
    },
    {
      level: 1,
      title: 'Examinations',
      icon: 'read',
      url: '/examinations',
      roles: ['Doctor', 'Admin'],
    },
    {
      level: 1,
      title: 'Settings',
      icon: 'setting',
      roles: ['Admin'],
      children: [
        {
          level: 2,
          title: 'Users',
          url: '/admin/users',
          icon: 'team',
        },
        {
          level: 2,
          title: 'Roles',
          icon: 'safety-certificate',
          url: '/admin/roles',
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
