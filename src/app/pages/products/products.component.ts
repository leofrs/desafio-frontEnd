import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) {}

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
}
