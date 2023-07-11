import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2'
import { SalesComponent } from '../sales/sales.component';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  private baseUrl = 'https://localhost:7193/api/Products';
  private clientsUrl='https://localhost:7193/api/Sales'
  Products: any[] = [];
  userId: number=0;
  productId:number=0;
  admin: boolean=false;
  modalOpen: boolean = false;
  description: string="";
  price: number=0;
  image: string="";
  stock: number=0;
  selectedImage: File | null = null;  
  
  constructor(private http: HttpClient, private usersService:UsersService, private storageService:StorageService ) { }
  ngOnInit(): void {
    this.admin = this.usersService.getUserInfo().admin;
    this.userId=this.storageService.getClient();
    this.getProducts().subscribe((data: any[]) => {
      this.Products = data;
    });
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
 
  closeModal(): void {
    this.modalOpen = false;
    this.description=""
    this.price=0
    this.image=""
    this.stock=0
  }

  saveProduct(): void {
    if (this.selectedImage) {
      this.image = this.selectedImage.name;
    }
    const product = {
      description: this.description,
      price: this.price,
      image: this.image,
      stock: this.stock
    };
  
    
    this.http.post(this.baseUrl, product).subscribe((data: any) => {
      Swal.fire(
        'Agregado',
        'Se ha agregado exitosamente',
        'success'
      );
    });
  }
  deleteProduct(id: number): void {
    const url = `${this.baseUrl}/${id}`;
    this.http.delete(url).subscribe(() => {
      Swal.fire(
        'Eliminado',
        'Se ha eliminado exitosamente',
        'success'
      )
    });
  }
  onImageSelected(event: any): void {
    console.log("image selected");
    
    const files = event.target.files;
  if (files && files.length > 0) {
    this.selectedImage = files[0];
  }
  }
  newSale(clientId:number):void{
    const url = `${this.clientsUrl}/${clientId}`;
    const sale ={
      client :this.userId,
      product :this.productId
    }
    this.http.post(url,sale).subscribe((data: any) => {
      Swal.fire(
        'Agregado',
        'Se ha registrado exitosamente',
        'success'
      )
    })
  }
}
