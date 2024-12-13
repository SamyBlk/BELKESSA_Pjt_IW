import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-detail-usr',
  imports: [
    FormsModule
  ],
  templateUrl: './detail-usr.component.html',
  styleUrl: './detail-usr.component.css'
})
export class DetailUsrComponent {

  users = {
    id: 1,
    name: 'John Doe',
    email: 'John.Doe@gmail.com',
    role: 'Admin'
  }
etatUsr = false;

  modifierUsr() {
    this.users={
      id: 2,
      name : "sam",
      email: "sam@gmail.com",
      role: "Client"
    }
  }
}
