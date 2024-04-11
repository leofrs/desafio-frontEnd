import { Injectable } from '@angular/core';
import { UserType, userCredentials } from '../db/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationUserService {
  private isAuthenticated: boolean = false;

  constructor() {
    this.isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  }

  login(email: string, password: string): boolean {
    const user = userCredentials.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      this.isAuthenticated = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
