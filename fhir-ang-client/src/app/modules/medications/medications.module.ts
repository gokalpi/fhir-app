import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicationsRoutingModule } from './medications-routing.module';
import { MedicationsComponent } from './medications.component';


@NgModule({
  declarations: [MedicationsComponent],
  imports: [
    CommonModule,
    MedicationsRoutingModule
  ]
})
export class MedicationsModule { }
