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
      title: 'Administration',
      icon: 'setting',
      roles: ['Doctor', 'Admin'],
      children: [
        {
          level: 2,
          title: 'Patients',
          icon: 'team',
          url: '/administration/patients',
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Practitioners',
          icon: 'team',
          url: '/administration/practitioners',
          roles: ['Admin'],
        },
        {
          level: 2,
          title: 'Encounters',
          icon: 'calendar',
          url: '/administration/encounters',
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Appointments',
          icon: 'calendar',
          url: '/administration/appointments',
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Locations',
          icon: 'environment',
          url: '/administration/locations',
          roles: ['Admin'],
        },
        {
          level: 2,
          title: 'Organizations',
          icon: 'bank',
          url: '/administration/organizations',
          roles: ['Admin'],
        },
      ],
    },
    {
      level: 1,
      title: 'Clinical',
      icon: 'area-chart',
      roles: ['Doctor', 'Admin'],
      children: [
        {
          level: 2,
          title: 'Care Plans',
          icon: 'line-chart',
          url: '/clinical/care-plans',
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Procedures',
          icon: 'file-done',
          url: '/clinical/procedures',
          roles: ['Doctor', 'Admin'],
        },
      ],
    },
    {
      level: 1,
      title: 'Diagnostics',
      icon: 'experiment',
      roles: ['Doctor', 'Admin'],
      children: [
        {
          level: 2,
          title: 'Diagnostic Reports',
          icon: 'profile',
          url: '/diagnostics/diagnostic-reports',
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Imaging Studies',
          icon: 'video-camera',
          url: '/diagnostics/imaging-studies',
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Media',
          icon: 'file-image',
          url: '/diagnostics/medias',
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Observations',
          icon: 'experiment',
          roles: ['Doctor', 'Admin'],
          children: [
            {
              level: 3,
              title: 'Laboratory',
              url: '/diagnostics/observations/laboratory',
              icon: 'experiment',
            },
            {
              level: 3,
              title: 'Survey',
              url: '/diagnostics/observations/survey',
              icon: 'reconciliation',
            },
            {
              level: 3,
              title: 'Vital Signs',
              url: '/diagnostics/observations/vital-signs',
              icon: 'fund-view',
            },
          ],
        },
      ],
    },
    {
      level: 1,
      title: 'Financial',
      icon: 'fund',
      roles: ['Doctor', 'Admin'],
      children: [
        {
          level: 2,
          title: 'Accounts',
          icon: 'contacts',
          url: '/financial/accounts',
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Claims',
          icon: 'container',
          url: '/financial/claims',
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Coverages',
          icon: 'file-done',
          url: '/financial/coverages',
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Coverage Eligibility Requests',
          icon: 'carry-out',
          url: '/financial/coverage-eligibility-requests',
          roles: ['Doctor', 'Admin'],
        },
      ],
    },
    {
      level: 1,
      title: 'Medications',
      icon: 'medicine-box',
      roles: ['Doctor', 'Admin'],
      children: [
        {
          level: 2,
          title: 'Immunizations',
          icon: 'bug',
          url: '/medications/immunizations',
          roles: ['Doctor', 'Admin'],
        },
        {
          level: 2,
          title: 'Medication Requests',
          icon: 'medicine-box',
          url: '/medications/medication-requests',
          roles: ['Doctor', 'Admin'],
        },
      ],
    },
    {
      level: 1,
      title: 'Security',
      icon: 'security-scan',
      roles: ['Admin'],
      children: [
        {
          level: 2,
          title: 'Users',
          url: '/administration/security/users',
          icon: 'team',
        },
        {
          level: 2,
          title: 'Roles',
          icon: 'safety-certificate',
          url: '/administration/security/roles',
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
