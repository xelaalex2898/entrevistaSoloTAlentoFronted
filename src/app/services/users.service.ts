import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'https://localhost:7193/api/Users/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) { }
  
  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  
  register(username: string, password: string,isManager:boolean): Observable<any> {
    return this.http.post(
      this.baseUrl + 'register',
      {
        username,
        password,
        isManager
      },
    );
  }
  
  login(name: string, pass: string): Observable<any> {
    
    return this.http.post(
      this.baseUrl + 'login',
      {
        'username':name,
        'password':pass,
      }
    );
  }
  
  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'/'+id);
  }
  getToken(): string {
    const token = sessionStorage.getItem('auth-user');
    if (!token) {
      return "";
    }
    return token;
  }
  logout(){
    sessionStorage.clear();
  }
  getUserInfo(): any {
    const token = sessionStorage.getItem('auth-user');
    if (!token) {
      this.router.navigate(['']);
      return null;
    }
  
    const decodedToken = jwt_decode<any>(token);
    
    return decodedToken;
  }
}
