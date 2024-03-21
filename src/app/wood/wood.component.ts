// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-wood',
//   templateUrl: './wood.component.html',
//   styleUrls: ['./wood.component.css']
// })
// export class WoodComponent {
//   product:any;
//   title:any="";
//   img:any=""; 
//   wood:any;
//   furniturename:any;
//   furnituredata:any;
//   furnitureimage:any;

//   constructor(private http:HttpClient){
//     this.furniturename=sessionStorage.getItem("itemsname");
//     http.get<any>("http://localhost:3000/furniture").subscribe((furnituredetails)=>{
//     console.log(furnituredetails);
//     const details=furnituredetails.find((fname:any)=>{
//       this.furnituredata=fname.fname;
//       this.furnitureimage=fname.fdetails;
//       console.log(fname.fdetails);
//       console.log(fname);
//        return fname.fname==this.furniturename;
//     })
//     if(details){
//       console.log(details);
//     }
//     else{
//       alert("not found");
//     }

    
       
//     });
//   }



// }
