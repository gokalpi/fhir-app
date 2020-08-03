import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImmunizationComponent } from './immunization.component';

const routes: Routes = [{ path: '', component: ImmunizationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImmunizationRoutingModule { }
