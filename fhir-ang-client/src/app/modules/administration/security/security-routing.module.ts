import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityComponent } from './security.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from 'src/app/core/guards';
import { Role } from 'src/app/core/enums';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  { path: '', component: SecurityComponent },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
  },
  {
    path: 'roles',
    component: RolesComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
