import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';

@NgModule({
  declarations: [AdminComponent, UsersComponent, RolesComponent],
  imports: [CommonModule, AdminRoutingModule, AllNgZorroAntdModules],
})
export class AdminModule {}
