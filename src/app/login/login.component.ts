import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor( private storageService: StorageService, private usersService: UsersService,private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      
    }
  }
  onSubmit(): void {
    const { name, pass } = this.form;

    this.usersService.login(name, pass).subscribe({
      next: (data:any) => {
        this.storageService.saveUser(data.message);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/clients']);

      },
      error: (err:any) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
    
  }

 
  
}
