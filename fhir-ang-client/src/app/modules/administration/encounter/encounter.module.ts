import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { EncounterRoutingModule } from './encounter-routing.module';
import { EncounterComponent } from './encounter.component';
import { EncounterDetailsComponent } from './encounter-details/encounter-details.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [EncounterComponent, EncounterDetailsComponent],
  imports: [
    CommonModule,
    EncounterRoutingModule,
    FullCalendarModule,
    AllNgZorroAntdModules,
  ],
})
export class EncounterModule {}
