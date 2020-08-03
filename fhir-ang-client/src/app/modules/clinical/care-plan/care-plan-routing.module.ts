import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarePlanComponent } from './care-plan.component';

const routes: Routes = [{ path: '', component: CarePlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarePlanRoutingModule { }
