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
  modalOpen: boolean = true;
  nombreTienda: string = '';
  direccionTienda: string = '';

  constructor(private http: HttpClient, private usersService:UsersService) { }

  ngOnInit(): void {
    this.admin = this.usersService.getUserInfo().admin;
    
    this.getStores().subscribe((data: any[]) => {
      this.stores = data;
    });
  }

  getStores(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  openModal(): void {
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
    this.direccionTienda = '';
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
      this.closeModal();
      this.getStores().subscribe((data: any[]) => {
        this.stores = data;
      });
    });
  }
  deleteStore(id: number): void {
    console.log(id)
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