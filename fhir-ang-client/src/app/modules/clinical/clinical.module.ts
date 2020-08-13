import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { ClinicalRoutingModule } from './clinical-routing.module';
import { ClinicalComponent } from './clinical.component';

@NgModule({
  declarations: [ClinicalComponent],
  imports: [CommonModule, ClinicalRoutingModule, CoreModule],
})
export class ClinicalModule {}
