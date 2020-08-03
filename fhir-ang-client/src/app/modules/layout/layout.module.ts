import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNgZorroAntdModules } from '../../all-ng-zorro-antd.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, AllNgZorroAntdModules],
  providers: [],
  exports: [LayoutComponent],
})
export class LayoutModule {}
