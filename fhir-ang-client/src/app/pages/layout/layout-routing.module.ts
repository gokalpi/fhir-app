import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../../core/guards';
import { Role } from 'src/app/core/enums';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('../admin/admin.module').then((m) => m.AdminModule),
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] },
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'examinations',
        loadChildren: () =>
          import('../examination/examination.module').then(
            (m) => m.ExaminationModule
          ),
        canActivate: [AuthGuard],
        data: { roles: [Role.Doctor, Role.Admin] },
      },
      {
        path: 'patients',
        loadChildren: () =>
          import('../patient/patient.module').then((m) => m.PatientModule),
        canActivate: [AuthGuard],
        data: { roles: [Role.Doctor, Role.Admin] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
