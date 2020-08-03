import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicationsComponent } from './medications.component';

const routes: Routes = [{ path: '', component: MedicationsComponent }, { path: 'medication-requests', loadChildren: () => import('./medication-request/medication-request.module').then(m => m.MedicationRequestModule) }, { path: 'immunizations', loadChildren: () => import('./immunization/immunization.module').then(m => m.ImmunizationModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicationsRoutingModule { }
