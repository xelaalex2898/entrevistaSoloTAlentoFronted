import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Observable, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  private baseUrl = 'https://localhost:7193/api/Clients/';
  
  Client : any="";
  name : string= "";
  lastName : string= "";
  direction : string= "";
  userID : number= 0;
  clientID : number= 0;
  currentUserid: any;
  modal:boolean=true;

  constructor(private http: HttpClient,private storageService: StorageService) { }
  ngOnInit(): void {
    this.currentUserid = this.storageService.getUser().id;
    this.clientID = this.storageService.getClient();
    if (this.clientID) {
      this.modal=false;
      
    }
    else{
      this.getClient().subscribe((data: any) => {
        this.Client = data;
        this.modal=false
        this.storageService.saveClient(this.Client.message.idClient)
      });
    }
      
    
    
  }
  getClient():Observable<any> {
    return this.http.get<any>(this.baseUrl+'?id='+this.currentUserid)
  }
  saveClient(): void {
    const client ={
      name :this.name,
      lastName :this.lastName,
      direction :this.direction,
      userID : this.currentUserid
    }
    const url=this.baseUrl+"clientRegister"
    this.http.post(url, client).subscribe((data: any) => {
      
      Swal.fire(
        'Agregado',
        'Se ha registrado exitosamente',
        'success'
      )
      this.ngOnInit()
      
    });
  }
}

