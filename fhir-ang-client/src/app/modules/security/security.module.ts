import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllNgZorroAntdModules } from 'src/app/all-ng-zorro-antd.module';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SecurityComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SecurityRoutingModule,
    AllNgZorroAntdModules,
  ],
})
export class SecurityModule {}
