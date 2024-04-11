import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  api: string = 'https://dummyjson.com';

  constructor() {
    this.getProducts();
  }

  async getProducts() {
    try {
      const response = await axios.get(`${this.api}/products`);
      return response.data;
    } catch (error) {
      return 'Error interno encontrado ' + error;
    }
  }
  async getProductDetails(id: number) {
    try {
      const response = await axios.get(`${this.api}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter detalhes do produto:', error);
      throw error;
    }
  }
}
