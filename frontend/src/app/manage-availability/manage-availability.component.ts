import { Component } from '@angular/core';
import { AvailabilityService } from '../availability.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

interface Availability {
  id: number;
  professionalId: number;
  startTime: string;
  endTime: string;
}

@Component({
  selector: 'app-manage-availability',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './manage-availability.component.html'
})
export class ManageAvailabilityComponent {
  availabilities: Availability[] = [];
  newAvailability: Partial<Availability> = { professionalId: 1, startTime: '', endTime: '' };

  constructor(private availabilityService: AvailabilityService) {
    this.loadAvailabilities();
  }

  loadAvailabilities() {
    this.availabilityService.getAvailabilities().subscribe((data: Availability[]) => {
      this.availabilities = data;
    });
  }

  addAvailability() {
    this.availabilityService.addAvailability(this.newAvailability).subscribe(() => {
      this.loadAvailabilities();
    });
  }

  deleteAvailability(id: number) {
    this.availabilityService.deleteAvailability(id).subscribe(() => {
      this.loadAvailabilities();
    });
  }
}
