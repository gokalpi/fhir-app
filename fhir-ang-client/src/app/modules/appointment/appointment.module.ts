import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllNgZorroAntdModules } from '../../all-ng-zorro-antd.module';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@NgModule({
  declarations: [AppointmentListComponent],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppointmentRoutingModule,
    AllNgZorroAntdModules,],
})
export class AppointmentModule {}
