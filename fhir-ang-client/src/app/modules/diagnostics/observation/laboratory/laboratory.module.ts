import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { LaboratoryRoutingModule } from './laboratory-routing.module';
import { LaboratoryComponent } from './laboratory.component';

@NgModule({
  declarations: [LaboratoryComponent],
  imports: [
    CommonModule,
    LaboratoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AllNgZorroAntdModules,
  ],
})
export class LaboratoryModule {}
