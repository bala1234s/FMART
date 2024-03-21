import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  order: any;
  constructor(private http: HttpClient) {
    http.get('http://localhost:3001/orders').subscribe((get) => { 
      this.order = get;
    })
   
   }

}
