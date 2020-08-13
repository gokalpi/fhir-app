import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { CoreModule } from '../../../core/core.module';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';

@NgModule({
  declarations: [LocationComponent],
  imports: [CommonModule, LocationRoutingModule, CoreModule, SweetAlert2Module],
})
export class LocationModule {}
