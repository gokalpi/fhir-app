import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PractitionerDetailsComponent } from './practitioner-details/practitioner-details.component';
import { PractitionerListComponent } from './practitioner-list/practitioner-list.component';

const routes: Routes = [
  { path: '', component: PractitionerListComponent },
  { path: ':id', component: PractitionerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PractitionerRoutingModule {}
