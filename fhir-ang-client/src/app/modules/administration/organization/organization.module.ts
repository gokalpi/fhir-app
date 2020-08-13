import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { CoreModule } from '../../../core/core.module';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';

@NgModule({
  declarations: [OrganizationComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    CoreModule,
    SweetAlert2Module,
  ],
})
export class OrganizationModule {}
