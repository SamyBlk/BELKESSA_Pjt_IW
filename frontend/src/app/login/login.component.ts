/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user = { name: '', password: '', role: '' };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.login(this.user).subscribe((response: any) => {
      if (response.role === 'PROFESSIONNEL') {
        this.router.navigate(['/manage-availability']);
      } else if (response.role === 'CLIENT') {
        this.router.navigate(['/manage-appointments']);
      }
    });
  }
}*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user = { name: '', password: '', role: '' };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.login(this.user).subscribe((response: any) => {
      if (response.role === 'PROFESSIONNEL') {
        this.router.navigate(['/manage-availability']);
      } else if (response.role === 'CLIENT') {
        this.router.navigate(['/manage-appointments']);
      }
    });
  }
}
