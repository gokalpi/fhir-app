import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { RoleRoutingModule } from './role-routing.module';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleListComponent } from './role-list/role-list.component';

@NgModule({
  declarations: [RoleAddComponent, RoleListComponent],
  imports: [CommonModule, RoleRoutingModule, AllNgZorroAntdModules],
})
export class RoleModule {}
