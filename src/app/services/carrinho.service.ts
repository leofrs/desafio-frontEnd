import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinhoItems: Product[] = [];
  private carrinhoSubject = new BehaviorSubject<Product[]>([]);

  constructor() {
    const savedCart = localStorage.getItem('carrinho');
    if (savedCart) {
      this.carrinhoItems = JSON.parse(savedCart);
      this.emitirCarrinhoAtualizado();
    }
  }

  getCarrinho() {
    return this.carrinhoItems;
  }

  adicionarAoCarrinho(item: Product) {
    const itemExistente = this.carrinhoItems.find((i) => i.id === item.id);

    if (itemExistente) {
      itemExistente.quantity++;
    } else {
      item.quantity = 1;
      this.carrinhoItems.push(item);
    }

    this.salvarCarrinhoNoLocalStorage();
  }

  atualizarQuantidade(item: Product) {
    this.salvarCarrinhoNoLocalStorage();
  }

  removerItem(item: Product) {
    const index = this.carrinhoItems.indexOf(item);
    if (index !== -1) {
      this.carrinhoItems.splice(index, 1);
      this.salvarCarrinhoNoLocalStorage();
    }
  }

  quantidadeNoCarrinho(): number {
    return this.carrinhoItems.length;
  }

  calcularPrecoTotal(): number {
    return this.carrinhoItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  private emitirCarrinhoAtualizado() {
    this.carrinhoSubject.next([...this.carrinhoItems]);
  }

  private salvarCarrinhoNoLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(this.carrinhoItems));
    this.emitirCarrinhoAtualizado();
  }
}
