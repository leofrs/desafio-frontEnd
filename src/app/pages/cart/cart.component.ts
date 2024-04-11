import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarrinhoService, Product } from '../../services/carrinho.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private carrinhoService: CarrinhoService) {}

  showQuantidadeNoCarrinho(): number {
    return this.carrinhoService.quantidadeNoCarrinho();
  }

  showitensNoCarrinho(): Product[] {
    return this.carrinhoService.getCarrinho();
  }

  getPrecoTotal(): number {
    return this.carrinhoService.calcularPrecoTotal();
  }

  adicionarQuantidade(item: any) {
    item.quantity++;
    this.carrinhoService.atualizarQuantidade(item);
  }

  removerQuantidade(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.carrinhoService.atualizarQuantidade(item);
    }
  }

  removerItem(item: any) {
    this.carrinhoService.removerItem(item);
  }
}
