import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  constructor(private usersService: UsersService, private router: Router, private storageService: StorageService) { }
  currentUser: any;
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }

  logout() {
    this.usersService.logout();
    this.router.navigate(['']);
      
  }
}

