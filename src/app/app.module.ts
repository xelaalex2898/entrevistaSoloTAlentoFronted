import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoresComponent } from './stores/stores.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { StoreProductsComponent } from './store-products/store-products.component';
import { httpInterceptorProviders } from './jwt-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientsComponent,
    NavbarComponent,
    StoresComponent,
    ProductsComponent,
    SalesComponent,
    StoreProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
