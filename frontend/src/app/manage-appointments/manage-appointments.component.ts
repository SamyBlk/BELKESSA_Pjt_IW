/*import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import {NgForOf, NgIf} from '@angular/common';

interface Appointment {
  id: number;
  clientId: number;
  professionalId: number;
  appointmentTime: string;
  status: string;
}

@Component({
  selector: 'app-manage-appointments',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './manage-appointments.component.html'
})
export class ManageAppointmentsComponent {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe((data: Appointment[]) => {
      this.appointments = data;
    });
  }

  confirmAppointment(id: number) {
    this.appointmentService.confirmAppointment(id).subscribe(() => {
      this.loadAppointments();
    });
  }

  cancelAppointment(id: number) {
    this.appointmentService.cancelAppointment(id).subscribe(() => {
      this.loadAppointments();
    });
  }
}*/

import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { NgForOf, NgIf } from '@angular/common';

interface Appointment {
  id: number;
  clientId: number;
  professionalId: number;
  appointmentTime: string;
  status: string;
}

@Component({
  selector: 'app-manage-appointments',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './manage-appointments.component.html'
})
export class ManageAppointmentsComponent {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe((data: Appointment[]) => {
      this.appointments = data;
    });
  }

  confirmAppointment(id: number) {
    this.appointmentService.confirmAppointment(id).subscribe(() => {
      this.loadAppointments();
    });
  }

  cancelAppointment(id: number) {
    this.appointmentService.cancelAppointment(id).subscribe(() => {
      this.loadAppointments();
    });
  }
}
