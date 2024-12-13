import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BookAppointmentComponent } from './components/bookappointment/bookappointment.component';
import { NotificationChoiceComponent } from './components/notificationchoice/notificationchoice.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, LoginComponent, BookAppointmentComponent, NotificationChoiceComponent, ConfirmationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}