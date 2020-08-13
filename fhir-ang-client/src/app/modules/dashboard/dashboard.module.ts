import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MyScheduleComponent } from './my-schedule.component';
import { DashboardAdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';

@NgModule({
  declarations: [MyScheduleComponent, DashboardAdminComponent, DoctorComponent],
  imports: [CommonModule, DashboardRoutingModule, CoreModule],
})
export class DashboardModule {}
