import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { PractitionerRoutingModule } from './practitioner-routing.module';
import { PractitionerListComponent } from './practitioner-list/practitioner-list.component';
import { PractitionerDetailsComponent } from './practitioner-details/practitioner-details.component';

@NgModule({
  declarations: [PractitionerListComponent, PractitionerDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PractitionerRoutingModule,
    AllNgZorroAntdModules,
    SweetAlert2Module,
  ],
})
export class PractitionerModule {}
