import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialComponent } from './financial.component';

@NgModule({
  declarations: [FinancialComponent],
  imports: [CommonModule, FinancialRoutingModule, AllNgZorroAntdModules],
})
export class FinancialModule {}
