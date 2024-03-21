import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data: any ;
  sec2backimg: any=[];
  i: any;
  datalength: any;
  backgroundchange: any;

  constructor (private http:HttpClient,private router:Router){
    http.get<any>("http://localhost:3001/homeselection").subscribe((homeselection)=>{
      this.data = homeselection;
      this.datalength = this.data.length;
      console.log(this.datalength); 

    for (this.i = 0; this.i < this.data.length; this.i++) {
      // console.log("works");
      // this.backgroundchange.style.backgroundImage='../../assets/background/home/wood.jpg';
      // console.log(this.sec2backimg);
    }
      console.log(this.sec2backimg);
    })
    // console.log(this.datalength);

    http.get<any>('http://localhost:3001/homeselection').subscribe((get) => { 
      console.log(get);
    })
    
    
  }

  itemsname(itemsname:any){
    sessionStorage.setItem('itemsname',itemsname);
    console.log(itemsname);
    this.router.navigateByUrl('product');
    

  } 
  

}
