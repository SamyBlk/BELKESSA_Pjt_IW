import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BookAppointmentComponent } from './components/bookappointment/bookappointment.component';
import { NotificationChoiceComponent } from './components/notificationchoice/notificationchoice.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'book-appointment', component: BookAppointmentComponent },
  { path: 'belkessa', component: NotificationChoiceComponent }, // Changement du chemin
  { path: 'confirmation', component: ConfirmationComponent }
];
