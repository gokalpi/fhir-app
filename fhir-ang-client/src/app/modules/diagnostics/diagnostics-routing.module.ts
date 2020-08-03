import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosticsComponent } from './diagnostics.component';

const routes: Routes = [
  { path: '', component: DiagnosticsComponent },
  {
    path: 'observations',
    loadChildren: () =>
      import('./observation/observation.module').then(
        (m) => m.ObservationModule
      ),
  },
  {
    path: 'diagnostic-reports',
    loadChildren: () =>
      import('./diagnostic-report/diagnostic-report.module').then(
        (m) => m.DiagnosticReportModule
      ),
  },
  {
    path: 'medias',
    loadChildren: () =>
      import('./media/media.module').then((m) => m.MediaModule),
  },
  {
    path: 'imaging-studies',
    loadChildren: () =>
      import('./imaging-study/imaging-study.module').then(
        (m) => m.ImagingStudyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnosticsRoutingModule {}
