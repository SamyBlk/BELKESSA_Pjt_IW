import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification-choice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notificationchoice.component.html',
  styleUrls: ['./notificationchoice.component.css']
})
export class NotificationChoiceComponent {
  notificationMethod: string = '';
  notificationMethodValue: string = '';
  date: string = '';
  time: string = '';
  professionalId: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.date = params['date'];
      this.time = params['time'];
      this.professionalId = params['professionalId'];
    });
  }

  chooseNotification(method: string) {
    this.notificationMethod = method;
  }

  confirmNotification() {
    this.router.navigate(['/confirmation'], { queryParams: { method: this.notificationMethod, value: this.notificationMethodValue, date: this.date, time: this.time, professionalId: this.professionalId } });
  }
}
