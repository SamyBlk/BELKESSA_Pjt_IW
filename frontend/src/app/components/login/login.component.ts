import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    FormsModule
  ],
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    if (this.authService.login(this.email, this.password)) {
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  }
}
