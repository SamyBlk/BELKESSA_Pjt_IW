import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  private availabilities: { professionalId: number, date: string, time: string }[] = [];

  addAvailability(professionalId: number, date: string, time: string) {
    this.availabilities.push({ professionalId, date, time });
  }

  getAvailabilities(professionalId: number) {
    return this.availabilities.filter(a => a.professionalId === professionalId);
  }
}