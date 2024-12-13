import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: { clientId: number, professionalId: number, date: string, time: string, status: string }[] = [];

  bookAppointment(clientId: number, professionalId: number, date: string, time: string) {
    this.appointments.push({ clientId, professionalId, date, time, status: 'en attente' });
  }

  getAppointments(clientId: number) {
    return this.appointments.filter(a => a.clientId === clientId);
  }

  confirmAppointment(professionalId: number, date: string, time: string) {
    const appointment = this.appointments.find(a => a.professionalId === professionalId && a.date === date && a.time === time);
    if (appointment) {
      appointment.status = 'confirmé';
    }
  }

  cancelAppointment(clientId: number, date: string, time: string) {
    const appointment = this.appointments.find(a => a.clientId === clientId && a.date === date && a.time === time);
    if (appointment) {
      appointment.status = 'annulé';
    }
  }
}