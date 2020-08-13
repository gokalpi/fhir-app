import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { CoreModule } from '../../../core/core.module';
import { PractitionerRoutingModule } from './practitioner-routing.module';
import { PractitionerListComponent } from './practitioner-list/practitioner-list.component';
import { PractitionerDetailsComponent } from './practitioner-details/practitioner-details.component';

@NgModule({
  declarations: [PractitionerListComponent, PractitionerDetailsComponent],
  imports: [
    CommonModule,
    PractitionerRoutingModule,
    CoreModule,
    SweetAlert2Module,
  ],
})
export class PractitionerModule {}
