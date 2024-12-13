import { Injectable } from '@angular/core';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: Users[] = [];
  private currentUser: Users | null = null;

  register(user: Users): boolean {
    if (this.users.find(u => u.email === user.email)) {
      return false; // Email already exists
    }
    this.users.push(user);
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
  }

  getCurrentUser(): Users | null {
    return this.currentUser;
  }
}