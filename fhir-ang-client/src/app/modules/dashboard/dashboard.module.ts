import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import { AllNgZorroAntdModules } from '../../all-ng-zorro-antd.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MyScheduleComponent } from './my-schedule.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [MyScheduleComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FullCalendarModule,
    AllNgZorroAntdModules,
  ],
})
export class DashboardModule {}
