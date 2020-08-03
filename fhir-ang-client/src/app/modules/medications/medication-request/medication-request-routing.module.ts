import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicationRequestComponent } from './medication-request.component';

const routes: Routes = [{ path: '', component: MedicationRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicationRequestRoutingModule { }
