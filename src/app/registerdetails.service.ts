import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterdetailsService {

 
  alert: boolean = false;

  constructor(private http:HttpClient) {}
  RegisterDetails() { 
   return this.http.get<any>('http://localhost:3001/personaldetails')
    
  
  }
}
