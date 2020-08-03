import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncounterRoutingModule } from './encounter-routing.module';
import { EncounterComponent } from './encounter.component';


@NgModule({
  declarations: [EncounterComponent],
  imports: [
    CommonModule,
    EncounterRoutingModule
  ]
})
export class EncounterModule { }
