import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';

@NgModule({
  declarations: [AdministrationComponent],
  imports: [CommonModule, AdministrationRoutingModule, CoreModule],
})
export class AdministrationModule {}
