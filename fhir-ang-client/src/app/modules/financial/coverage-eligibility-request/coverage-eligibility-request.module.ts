import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { CoverageEligibilityRequestRoutingModule } from './coverage-eligibility-request-routing.module';
import { CoverageEligibilityRequestComponent } from './coverage-eligibility-request.component';

@NgModule({
  declarations: [CoverageEligibilityRequestComponent],
  imports: [
    CommonModule,
    CoverageEligibilityRequestRoutingModule,
    AllNgZorroAntdModules,
  ],
})
export class CoverageEligibilityRequestModule {}
