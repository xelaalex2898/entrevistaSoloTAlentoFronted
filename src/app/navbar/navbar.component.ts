import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private usersService: UsersService, private router: Router) { }
  logout() {
    this.usersService.logout();
    this.router.navigate(['']);
      
  }

}
