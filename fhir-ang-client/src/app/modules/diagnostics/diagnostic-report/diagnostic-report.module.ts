import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosticReportRoutingModule } from './diagnostic-report-routing.module';
import { DiagnosticReportComponent } from './diagnostic-report.component';


@NgModule({
  declarations: [DiagnosticReportComponent],
  imports: [
    CommonModule,
    DiagnosticReportRoutingModule
  ]
})
export class DiagnosticReportModule { }
