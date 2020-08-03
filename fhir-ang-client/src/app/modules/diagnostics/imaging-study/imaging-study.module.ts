import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagingStudyRoutingModule } from './imaging-study-routing.module';
import { ImagingStudyComponent } from './imaging-study.component';


@NgModule({
  declarations: [ImagingStudyComponent],
  imports: [
    CommonModule,
    ImagingStudyRoutingModule
  ]
})
export class ImagingStudyModule { }
