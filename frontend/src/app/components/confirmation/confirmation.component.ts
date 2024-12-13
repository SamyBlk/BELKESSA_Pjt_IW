import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { AuthService } from '../../services/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  appointment: any;
  notificationMethod: string = '';
  notificationValue: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private appointmentService: AppointmentService, private authService: AuthService) {
    this.route.queryParams.subscribe(params => {
      this.notificationMethod = params['method'];
      this.notificationValue = params['value'];
    });

    const user = this.authService.getCurrentUser();
    if (user) {
      this.appointment = this.appointmentService.getAppointments(user.id).pop();
    }
  }

  confirmAppointment() {
    this.router.navigate(['/login']); // Redirection vers la page de connexion
  }

  cancelAppointment() {
    this.router.navigate(['/book-appointment']);
  }
}
