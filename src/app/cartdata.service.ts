import { HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {

  constructor(private http: HttpClient) { }
   CartData(){
     return this.http.get('http://localhost:3001/cart');
    }
}
