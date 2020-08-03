import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverageEligibilityRequestRoutingModule } from './coverage-eligibility-request-routing.module';
import { CoverageEligibilityRequestComponent } from './coverage-eligibility-request.component';


@NgModule({
  declarations: [CoverageEligibilityRequestComponent],
  imports: [
    CommonModule,
    CoverageEligibilityRequestRoutingModule
  ]
})
export class CoverageEligibilityRequestModule { }
