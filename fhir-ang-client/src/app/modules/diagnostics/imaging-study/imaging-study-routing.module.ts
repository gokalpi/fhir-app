import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagingStudyComponent } from './imaging-study.component';

const routes: Routes = [{ path: '', component: ImagingStudyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagingStudyRoutingModule { }
