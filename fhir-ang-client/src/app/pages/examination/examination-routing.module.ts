import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExaminationListComponent } from './examination-list/examination-list.component';
import { ExaminationAddComponent } from './examination-add/examination-add.component';

const routes: Routes = [
  { path: '', component: ExaminationListComponent },
  { path: 'add', component: ExaminationAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExaminationRoutingModule {}
