import { Component } from '@angular/core';
import { AuthenticationUserService } from '../../services/authentication-user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(
    private authService: AuthenticationUserService,
    private router: Router
  ) {}

  submitLoginForm() {
    const isLoggedIn = this.authService.login(this.email, this.password);
    if (isLoggedIn) {
      this.router.navigate(['/products']);
    } else {
      alert('Usuario não encontrado');
      this.loginError = true;
    }
  }
}
