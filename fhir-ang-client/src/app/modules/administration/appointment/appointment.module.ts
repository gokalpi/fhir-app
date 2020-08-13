import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../../core/core.module';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';

@NgModule({
  declarations: [AppointmentComponent],
  imports: [CommonModule, AppointmentRoutingModule, CoreModule],
})
export class AppointmentModule {}
