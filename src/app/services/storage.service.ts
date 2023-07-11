import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const USER_KEY = 'auth-user';
const CLIENT_KEY= 'client-id'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private router: Router) {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,user);
  }
  public saveClient(id:number): void {
    
    window.sessionStorage.removeItem(CLIENT_KEY);
    window.sessionStorage.setItem(CLIENT_KEY,id.toString());
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
  public getClient(): any {
    const client = window.sessionStorage.getItem(CLIENT_KEY);
    if (client) {
      return client;
    }
    this.router.navigate(['/clients']);
    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
  
  
}