import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  private baseUrl = 'https://localhost:7193/api/Sales';
  
  Cart: any[] = [];
  admin: boolean=false;
  userId: number=0;
  productId:number=0;

  constructor(private http: HttpClient, private usersService:UsersService) { }
  ngOnInit(): void {
    this.admin = this.usersService.getUserInfo().admin;
    this.getCart().subscribe((data: any[]) => {
      this.Cart = data;
    });
  }

  getCart(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'cart');
  }
  
  newSale():void{
    const sale ={
      client :this.userId,
      product :this.productId
    }
    this.http.post(this.baseUrl,sale).subscribe((data: any) => {
      console.log(data);
    })
  }

  deleteSale(id: number): void {
    const url = `${this.baseUrl}/${id}`;
    this.http.delete(url).subscribe(() => {
      console.log('Product deleted of the cart');
    });
  }
}
