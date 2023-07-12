import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  username : string = '';
  password: string = '';
  isAdmin: boolean = false;
  constructor(private storageService: StorageService, private usersService: UsersService,private router: Router) {}

  ngOnInit(): void { }

  onSubmit() {
    this.usersService.register(this.username, this.password, this.isAdmin).subscribe({
      next: (data:any) => {
        this.storageService.saveUser(data.message);
        this.router.navigate(['/clients']);
      },
    });
    
    Swal.fire('Registro', 'Se ha registrado exitosamente', 'success');
  }
}