import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user = { name: '', email: '', password: '', role: '' };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.register(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
