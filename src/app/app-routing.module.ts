import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';
import { authGuard } from './auth.guard';
import { StoresComponent } from './stores/stores.component';
import { ProductsComponent } from './products/products.component';
import { StoreProductsComponent } from './store-products/store-products.component';
import { SalesComponent } from './sales/sales.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path :'',component:LoginComponent}, 
  {path :"clients", component:ClientsComponent, canActivate: [authGuard],},
  {path :"stores", component:StoresComponent, canActivate: [authGuard],},
  {path :"products", component:ProductsComponent, canActivate: [authGuard],},
  {path :"store-products", component:StoreProductsComponent, canActivate: [authGuard],},
  {path :"cart", component:SalesComponent, canActivate: [authGuard],},
  {path :"register", component:UserRegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
