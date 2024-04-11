import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router } from '@angular/router';
import { CarrinhoService, Product } from '../../services/carrinho.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    try {
      const resp = await this.productsService.getProducts();
      this.products = resp.products;
    } catch (error) {
      console.error('Erro ao obter produtos:', error);
    }
  }

  viewDetails(id: number) {
    this.router.navigate(['products-details/', id]);
  }

  adicionarAoCarrinho(item: Product) {
    this.carrinhoService.adicionarAoCarrinho(item);
  }
}
