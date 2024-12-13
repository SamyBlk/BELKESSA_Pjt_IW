import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookAppointmentComponent {
  date: string = '';
  time: string = '';
  professionalId: number = 0;

  constructor(private router: Router, private authService: AuthService, private appointmentService: AppointmentService) {}

  bookAppointment() {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.appointmentService.bookAppointment(user.id, this.professionalId, this.date, this.time);
      this.router.navigate(['/belkessa'], { queryParams: { date: this.date, time: this.time, professionalId: this.professionalId } }); // Passer les infos du rendez-vous
    }
  }
}
