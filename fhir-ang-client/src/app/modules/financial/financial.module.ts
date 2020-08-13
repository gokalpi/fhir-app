import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialComponent } from './financial.component';

@NgModule({
  declarations: [FinancialComponent],
  imports: [CommonModule, FinancialRoutingModule, CoreModule],
})
export class FinancialModule {}
