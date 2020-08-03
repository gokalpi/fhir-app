import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  { path: '', component: AdministrationComponent },
  {
    path: 'patients',
    loadChildren: () =>
      import('./patient/patient.module').then((m) => m.PatientModule),
  },
  {
    path: 'practitioners',
    loadChildren: () =>
      import('./practitioner/practitioner.module').then(
        (m) => m.PractitionerModule
      ),
  },
  {
    path: 'organizations',
    loadChildren: () =>
      import('./organization/organization.module').then(
        (m) => m.OrganizationModule
      ),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./location/location.module').then((m) => m.LocationModule),
  },
  {
    path: 'encounters',
    loadChildren: () =>
      import('./encounter/encounter.module').then((m) => m.EncounterModule),
  },
  {
    path: 'appointments',
    loadChildren: () =>
      import('./appointment/appointment.module').then(
        (m) => m.AppointmentModule
      ),
  },
  {
    path: 'devices',
    loadChildren: () =>
      import('./device/device.module').then((m) => m.DeviceModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
