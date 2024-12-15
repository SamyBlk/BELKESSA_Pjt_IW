import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ManageAvailabilityComponent } from './manage-availability/manage-availability.component';
import { ManageAppointmentsComponent } from './manage-appointments/manage-appointments.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'manage-availability', component: ManageAvailabilityComponent },
  { path: 'manage-appointments', component: ManageAppointmentsComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];
