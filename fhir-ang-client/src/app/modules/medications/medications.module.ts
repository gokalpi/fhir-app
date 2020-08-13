import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { MedicationsRoutingModule } from './medications-routing.module';
import { MedicationsComponent } from './medications.component';

@NgModule({
  declarations: [MedicationsComponent],
  imports: [CommonModule, MedicationsRoutingModule, CoreModule],
})
export class MedicationsModule {}
