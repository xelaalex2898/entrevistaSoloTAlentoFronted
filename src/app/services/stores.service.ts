import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class StoresService {
  private baseUrl='https://localhost:7193/api/Sales/'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private router: Router) { }
  cart():Observable<any>{
    return this.http.get(this.baseUrl+'cart');
  }
  newSale(productId: number, clientId:number ) : Observable<any>{
    return this.http.post(
      this.baseUrl,
      {
        'product':productId,
        'client':clientId,
      },
    );

  }
  delateSale(id:number):Observable<any>{
    return this.http.post(
      this.baseUrl+'/'+id,
      {
        'id':id
      },
    );
  }
}
