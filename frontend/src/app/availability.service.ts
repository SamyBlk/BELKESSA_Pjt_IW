import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  private apiUrl = 'http://localhost:8088/availabilities';

  constructor(private http: HttpClient) {}

  getAvailabilities(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addAvailability(availability: any): Observable<any> {
    return this.http.post(this.apiUrl, availability);
  }

  deleteAvailability(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
