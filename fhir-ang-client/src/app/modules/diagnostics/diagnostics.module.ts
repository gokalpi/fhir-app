import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosticsRoutingModule } from './diagnostics-routing.module';
import { DiagnosticsComponent } from './diagnostics.component';

@NgModule({
  declarations: [DiagnosticsComponent],
  imports: [CommonModule, DiagnosticsRoutingModule],
})
export class DiagnosticsModule {}
