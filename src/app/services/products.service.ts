import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  api: string = 'https://dummyjson.com/products';

  constructor() {
    this.getProducts();
  }

  async getProducts() {
    try {
      const response = await axios.get(`${this.api}`);
      return response.data;
    } catch (error) {
      return 'Error interno encontrado ' + error;
    }
  }
}
