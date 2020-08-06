import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncounterComponent } from './encounter.component';
import { EncounterDetailsComponent } from './encounter-details/encounter-details.component';

const routes: Routes = [
  { path: '', component: EncounterComponent },
  { path: ':id', component: EncounterDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncounterRoutingModule {}
