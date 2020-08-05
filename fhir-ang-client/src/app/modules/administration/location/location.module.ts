import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';

@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AllNgZorroAntdModules,
  ],
})
export class LocationModule {}
