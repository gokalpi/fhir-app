import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicalComponent } from './clinical.component';

const routes: Routes = [
  { path: '', component: ClinicalComponent },
  {
    path: 'care-plans',
    loadChildren: () =>
      import('./care-plan/care-plan.module').then((m) => m.CarePlanModule),
  },
  {
    path: 'procedures',
    loadChildren: () =>
      import('./procedure/procedure.module').then((m) => m.ProcedureModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicalRoutingModule {}
