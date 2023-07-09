import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'https://localhost:7193/api/Users/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  
  register(username: string, password: string): Observable<any> {
    return this.http.post(
      this.baseUrl + 'register',
      {
        username,
        password,
      },
    );
  }
  
  login(name: string, pass: string): Observable<any> {
    console.log('login')
    return this.http.post(
      this.baseUrl + 'login',
      {
        'name':name,
        'pass':pass,
      }
    );
  }
  
  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'/'+id);
  }
  getToken(): string {
    
    const token = localStorage.getItem('token');
    console.log("token")
    console.log(token)
    if (!token) {
      throw new Error('No token found in session');
    }
    return token;
  }
  logout(){
    sessionStorage.clear();
  }
}
