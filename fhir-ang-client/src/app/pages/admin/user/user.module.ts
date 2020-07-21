import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { UserRoutingModule } from './user-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserAddComponent, UserListComponent],
  imports: [CommonModule, UserRoutingModule, AllNgZorroAntdModules],
})
export class UserModule {}
