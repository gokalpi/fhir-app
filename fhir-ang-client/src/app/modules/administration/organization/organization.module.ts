import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';

@NgModule({
  declarations: [OrganizationComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AllNgZorroAntdModules,
  ],
})
export class OrganizationModule {}
