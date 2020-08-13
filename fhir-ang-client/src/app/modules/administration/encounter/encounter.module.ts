import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { CoreModule } from '../../../core/core.module';
import { EncounterRoutingModule } from './encounter-routing.module';
import { EncounterComponent } from './encounter.component';
import { EncounterDetailsComponent } from './encounter-details/encounter-details.component';

@NgModule({
  declarations: [EncounterComponent, EncounterDetailsComponent],
  imports: [
    CommonModule,
    EncounterRoutingModule,
    CoreModule,
    SweetAlert2Module,
  ],
})
export class EncounterModule {}
