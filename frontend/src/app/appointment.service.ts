import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8088/appointments';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  confirmAppointment(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { status: 'CONFIRMED' });
  }

  cancelAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
