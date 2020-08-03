import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservationComponent } from './observation.component';

const routes: Routes = [
  { path: '', component: ObservationComponent },
  {
    path: 'laboratory',
    loadChildren: () =>
      import('./laboratory/laboratory.module').then((m) => m.LaboratoryModule),
  },
  {
    path: 'survey',
    loadChildren: () =>
      import('./survey/survey.module').then((m) => m.SurveyModule),
  },
  {
    path: 'vital-signs',
    loadChildren: () =>
      import('./vital-sign/vital-sign.module').then((m) => m.VitalSignModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservationRoutingModule {}
