import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Users } from '../../users';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [
    FormsModule
  ],
  standalone: true,
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: Users = new Users();

  constructor(private authService: AuthService) {}

  register() {
    if (this.authService.register(this.user)) {
      alert('Registration successful');
    } else {
      alert('Email already exists');
    }
  }
}
