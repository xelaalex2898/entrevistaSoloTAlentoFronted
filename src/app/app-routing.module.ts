import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';
import { HttpRequestInterceptor } from './jwt-interceptor.interceptor';

const routes: Routes = [
  {path :'',component:LoginComponent}, 
  // {path :"clients", component:ClientsComponent, canActivate: [HttpRequestInterceptor],}
  {path :"clients", component:ClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
