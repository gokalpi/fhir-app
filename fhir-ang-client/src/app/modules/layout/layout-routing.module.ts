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
        path: 'administration',
        loadChildren: () =>
          import('../administration/administration.module').then(
            (m) => m.AdministrationModule
          ),
        canActivate: [AuthGuard],
        data: { roles: [Role.Doctor, Role.Admin] },
      },
      {
        path: 'clinical',
        loadChildren: () =>
          import('../clinical/clinical.module').then((m) => m.ClinicalModule),
        canActivate: [AuthGuard],
        data: { roles: [Role.Doctor, Role.Admin] },
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'diagnostics',
        loadChildren: () =>
          import('../diagnostics/diagnostics.module').then(
            (m) => m.DiagnosticsModule
          ),
        canActivate: [AuthGuard],
        data: { roles: [Role.Doctor, Role.Admin] },
      },
      {
        path: 'financial',
        loadChildren: () =>
          import('../financial/financial.module').then(
            (m) => m.FinancialModule
          ),
      },

      {
        path: 'medications',
        loadChildren: () =>
          import('../medications/medications.module').then(
            (m) => m.MedicationsModule
          ),
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
