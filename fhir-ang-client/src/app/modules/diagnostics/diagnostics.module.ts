import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { DiagnosticsRoutingModule } from './diagnostics-routing.module';
import { DiagnosticsComponent } from './diagnostics.component';

@NgModule({
  declarations: [DiagnosticsComponent],
  imports: [CommonModule, DiagnosticsRoutingModule, CoreModule],
})
export class DiagnosticsModule {}
