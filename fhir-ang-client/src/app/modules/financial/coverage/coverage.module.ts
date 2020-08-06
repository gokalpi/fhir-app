import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { CoverageRoutingModule } from './coverage-routing.module';
import { CoverageComponent } from './coverage.component';

@NgModule({
  declarations: [CoverageComponent],
  imports: [CommonModule, CoverageRoutingModule, AllNgZorroAntdModules],
})
export class CoverageModule {}
