import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { StorageService } from '../services/storage.service';
import { ProductsComponent } from '../products/products.component';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  providers: [ProductsComponent]
})


export class SalesComponent implements OnInit {
  private baseUrl = 'https://localhost:7193/api/Sales';
  
  Cart: any = [];
  admin: boolean=false;
  userId: number=0;
  productId:number=0;
  clientId :number=0

  constructor(private http: HttpClient, private usersService:UsersService,private storageService:StorageService,private productsComponent:ProductsComponent) { }
  ngOnInit(): void {
    this.admin = this.usersService.getUserInfo().admin;
    this.clientId =this.storageService.getClient()
    this.getSales().subscribe((data: any) => {
      for (let i = 0; i < data.message.length; i++) {
        const productId = data.message[i].product;
        const saleId = data.message[i].saleID;
        
        this.productsComponent.getProduct(productId).subscribe((data1)=>{
          data1.message[0].sales=saleId
          this.Cart.push(data1.message[0]);
        });
      }
    });
  }

  getSales(): Observable<any> {
    const url = this.baseUrl+'/cart?id='+this.clientId;    
    return this.http.get<any>(url);
  }
  
  

  deleteSale(id: number): void {
    const url = this.baseUrl+"/"+id;
    this.http.delete(url).subscribe(() => {
      Swal.fire(
        'Eliminado',
        'Se ha eliminado exitosamente',
        'success'
      )
    });
  }
}

