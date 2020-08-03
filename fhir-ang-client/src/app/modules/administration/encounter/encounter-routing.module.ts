import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncounterComponent } from './encounter.component';

const routes: Routes = [{ path: '', component: EncounterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncounterRoutingModule { }
