import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverageRoutingModule } from './coverage-routing.module';
import { CoverageComponent } from './coverage.component';


@NgModule({
  declarations: [CoverageComponent],
  imports: [
    CommonModule,
    CoverageRoutingModule
  ]
})
export class CoverageModule { }
