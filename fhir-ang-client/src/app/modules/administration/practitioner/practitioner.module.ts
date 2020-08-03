import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllNgZorroAntdModules } from '../../../all-ng-zorro-antd.module';

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
  ],
})
export class PractitionerModule {}
