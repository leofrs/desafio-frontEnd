import { Component } from '@angular/core';
import { AuthenticationUserService } from '../../services/authentication-user.service';
import { Router } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapDoorOpen,
  bootstrapHouse,
  bootstrapCart,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({ bootstrapDoorOpen, bootstrapHouse, bootstrapCart }),
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(
    private authService: AuthenticationUserService,
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  home() {
    this.router.navigate(['/products']);
  }

  cart() {
    this.router.navigate(['/product-cart']);
  }

  showQuantidadeNoCarrinho(): number {
    return this.carrinhoService.quantidadeNoCarrinho();
  }
}
