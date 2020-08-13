import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { CoreModule } from '../../../core/core.module';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';

@NgModule({
  declarations: [AppointmentComponent],
  imports: [CommonModule, AppointmentRoutingModule, CoreModule, SweetAlert2Module],
})
export class AppointmentModule {}
