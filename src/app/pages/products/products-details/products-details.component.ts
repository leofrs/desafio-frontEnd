import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { CarrinhoService, Product } from '../../../services/carrinho.service';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [NgIf, NavbarComponent, NgFor],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  productId: number = 0;
  productDetails: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = +params['id'];
      this.getProductDetails(this.productId);
    });
  }

  getProductDetails(id: number): void {
    this.productService
      .getProductDetails(id)
      .then((data) => {
        this.productDetails = data;
      })
      .catch((error) => {
        console.error('Erro ao obter detalhes do produto:', error);
      });
  }

  adicionarAoCarrinho(item: Product) {
    this.carrinhoService.adicionarAoCarrinho(item);
  }
}
