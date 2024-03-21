import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wood',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product:any;
  title:any="";
  img:any=""; 
  wood:any;
  furniturename:any;
  furnituredata:any;
  furnitureimage:any;
  furnitureDetails:any;
  fdetails:any;

  constructor(private http:HttpClient){
    this.furniturename=sessionStorage.getItem("itemsname");
    http.get<any>("http://localhost:3001/furniture").subscribe((furnituredetails)=>{
    console.log(furnituredetails);
    const details=furnituredetails.find((fname:any)=>{
      this.furnituredata=fname.fname;
      this.furnitureDetails=fname;
      this.furnitureimage=fname.fdetails;
      console.log(fname.fdetails);
      console.log(fname);
       return fname.fname==this.furniturename;
    })
    if(details){
      console.log(details);
    }
    else{
      alert("not found");
    }

    
       
    });
  }


  productDetails(index:any){
    console.log(this.furnitureDetails.fdetails[index]);
    this.fdetails = this.furnitureDetails.fdetails[index];
    
    sessionStorage.setItem('fdetails',JSON.stringify(this.fdetails));
  }


}
