import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoverageEligibilityRequestComponent } from './coverage-eligibility-request.component';

const routes: Routes = [{ path: '', component: CoverageEligibilityRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoverageEligibilityRequestRoutingModule { }
