import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../../core/core.module';
import { PractitionerRoutingModule } from './practitioner-routing.module';
import { PractitionerListComponent } from './practitioner-list/practitioner-list.component';
import { PractitionerDetailsComponent } from './practitioner-details/practitioner-details.component';

@NgModule({
  declarations: [PractitionerListComponent, PractitionerDetailsComponent],
  imports: [CommonModule, PractitionerRoutingModule, CoreModule],
})
export class PractitionerModule {}
