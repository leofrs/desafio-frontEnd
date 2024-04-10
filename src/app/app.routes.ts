import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  { path: '', title: 'Login', component: LoginComponent },
  { path: 'register', title: 'Cadastro', component: RegisterComponent },
  { path: 'products', title: 'Products', component: ProductsComponent },
];
