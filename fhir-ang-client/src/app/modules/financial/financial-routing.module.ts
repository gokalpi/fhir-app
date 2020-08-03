import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialComponent } from './financial.component';

const routes: Routes = [{ path: '', component: FinancialComponent }, { path: 'accounts', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }, { path: 'claims', loadChildren: () => import('./claim/claim.module').then(m => m.ClaimModule) }, { path: 'coverages', loadChildren: () => import('./coverage/coverage.module').then(m => m.CoverageModule) }, { path: 'coverage-eligibility-requests', loadChildren: () => import('./coverage-eligibility-request/coverage-eligibility-request.module').then(m => m.CoverageEligibilityRequestModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
