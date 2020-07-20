import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNgZorroAntdModules } from '../../all-ng-zorro-antd.module';

import { ExaminationRoutingModule } from './examination-routing.module';
import { ExaminationListComponent } from './examination-list/examination-list.component';
import { ExaminationAddComponent } from './examination-add/examination-add.component';

@NgModule({
  declarations: [ExaminationAddComponent, ExaminationListComponent],
  imports: [CommonModule, ExaminationRoutingModule, AllNgZorroAntdModules],
})
export class ExaminationModule {}
