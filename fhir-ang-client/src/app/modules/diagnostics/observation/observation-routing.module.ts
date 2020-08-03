import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservationComponent } from './observation.component';

const routes: Routes = [{ path: '', component: ObservationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservationRoutingModule { }
