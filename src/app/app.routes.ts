import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailsComponent } from './pages/products/products-details/products-details.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', title: 'Login', component: LoginComponent },
  {
    path: 'products',
    title: 'Produtos',
    component: ProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'products-details/:id',
    title: 'Detalhes do Produto',
    component: ProductsDetailsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'product-cart',
    title: 'Carrinho',
    component: CartComponent,
    canActivate: [AuthGuardService],
  },
];
