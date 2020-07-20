import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNgZorroAntdModules } from '../../all-ng-zorro-antd.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MyScheduleComponent } from '../my-schedule/my-schedule.component';

@NgModule({
  declarations: [LayoutComponent, MyScheduleComponent],
  imports: [CommonModule, LayoutRoutingModule, AllNgZorroAntdModules],
  providers: [],
  exports: [LayoutComponent],
})
export class LayoutModule {}
