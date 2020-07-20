import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminationRoutingModule } from './examination-routing.module';
import { ExaminationListComponent } from './examination-list/examination-list.component';
import { ExaminationAddComponent } from './examination-add/examination-add.component';

@NgModule({
  declarations: [ExaminationAddComponent, ExaminationListComponent],
  imports: [CommonModule, ExaminationRoutingModule],
})
export class ExaminationModule {}
