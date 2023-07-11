import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  private baseUrl = 'https://localhost:7193/api/Clients/';
  
  Client : any[]=[];
  constructor(private http: HttpClient,private storageService: StorageService) { }
  currentUserid: any;
  ngOnInit(): void {
    this.currentUserid = this.storageService.getUser().id;
    this.getClient().subscribe((data: any[]) => {
      this.Client = data;
    });
    this.storageService.saveClient(this.currentUserid)

  }
  getClient():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+'getClient'+this.currentUserid)
  };

  
}

