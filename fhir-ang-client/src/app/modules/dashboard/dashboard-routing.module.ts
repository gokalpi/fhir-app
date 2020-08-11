import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorComponent } from './doctor/doctor.component';
import { DashboardAdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'admin', component: DashboardAdminComponent },
  { path: 'doctor', component: DoctorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
