import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  private baseUrl = 'https://localhost:7193/api/Stores';
  stores: any[] = [];
  admin: boolean=false;
  nombreTienda: string = '';
  direccionTienda: string = '';

  constructor(private http: HttpClient, private usersService:UsersService) { }

  ngOnInit(): void {
    
    this.getStores().subscribe((data: any[]) => {
      this.stores = data;
    });
    this.admin = this.usersService.getUserInfo().admin;
    
  }

  getStores(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
 

  saveStore(): void {
    const store ={
      direction :this.direccionTienda,
      Branch : this.nombreTienda
    }
    this.http.post(this.baseUrl, store).subscribe((data: any) => {
      Swal.fire(
        'Agregado',
        'Se ha registrado exitosamente',
        'success'
      )
      
    });
  }
  deleteStore(id: number): void {
    const url = `${this.baseUrl}/${id}`;
    this.http.delete(url).subscribe(() => {
      Swal.fire(
        'Eliminado',
        'Se ha eliminado exitosamente',
        'success'
      )
      this.getStores().subscribe((data: any[]) => {
        this.stores = data;
      });
    });
  }

}