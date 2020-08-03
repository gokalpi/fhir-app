import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitalSignComponent } from './vital-sign.component';

const routes: Routes = [{ path: '', component: VitalSignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitalSignRoutingModule { }
