import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartdataService } from '../cartdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  Cart: any;
  quantity: number = 1;
  data: any = [];
  Increment: any = [];
  save: any;
  saved: any;
  list: any;
  datalist: any;
  title: any;
  carttitle:any;
  cart: any;
  cartname: any=[];
  cartDeatils: any = [];
  titlename: any;
  cartindex: any;
  titleapi: any;
  /** actual price*/ 
  waveindex: any;
  Rs: any;
  splitvalue: any;
  initialsplit: any = [];
  /** actual price*/
  
 /** price*/
  initialprice: any = [];
  price: any;
  priceRs: any;
  splitprice: any;
  /**  price*/
  
  /** save*/
  initialsave: any = [];
  saves: any;
  saveRs: any;
  splitsave: any;


  /** save */




  // count: any = 0;
  
  constructor(private http: HttpClient, private service:CartdataService,private route:Router) {
    this.service.CartData().subscribe((cart) => {
      console.log(cart);
      this.cartDeatils = cart;
      console.log(this.cartDeatils[0]);
      for (var i = 0; i < this.cartDeatils.length; i++)
        this.Increment[i] = 1;
      
      this.Cart = cart;
      this.data = this.Cart;
    })
    console.log(this.Cart);

    // console.log((sessionStorage.getItem('save')))
    // const mani = sessionStorage.getItem('save');
    // this.save = JSON.parse(mani);
    this.save = sessionStorage.getItem('save');
    // console.log(this.save);
    this.saved = JSON.parse(this.save);
    console.log(this.saved);
    

    

    for (var j = 0; j <this.saved.length; j++) { 
      console.log(this.saved[j]);
    }
    

    console.log(this.save);
    this.list = sessionStorage.getItem('productlist');
    this.datalist = JSON.parse(this.list);
    console.log(this.datalist);

    const data = this.datalist.find((getlist: any) => {
      console.log(getlist.titleitem);
      this.title = getlist.titleitem;
      console.log(this.title)
      console.log(this.data.titleitem);
    })

    
  
  }



  
   
  deletecart(index:any ,title:any ) {
    this.service.CartData().subscribe((cartname) => { 

      this.cartname = cartname;
      this.cartname.splice(index, 1);
      console.log(this.cartname);


      // this.http.patch("http://localhost:3000/", {cart:this.cartname}).subscribe((mani) => {
      //   console.log(mani);
      // });

      this.http.get<any>("http://localhost:3001/cart").subscribe((getcart) => {
        this.titlename = title;


        const data = getcart.find((findcart: any) => {
          console.log(findcart.title);
          this.cartindex = findcart.email;
          this.titleapi = findcart.title;
          return title == findcart.title;
          
        });
        // console.log(title);
        if (data) {
          console.log(this.titleapi);
          let obj = {
            title: this.titleapi
          }
          this.http.post<any>("http://localhost:3001/delcart" ,obj).subscribe((deleted) => {
            console.log("deleted");
            this.route.navigateByUrl('cart').then(() => { 
              window.location.reload();
            });
          

            // window.location.reload();
          })
        }
        // console.log(this.datalist.titleitem);

       })

      // for (var i = 0; i < this.cartname.length; i++) {
      //   this.carttitle = this.cartname[i].title;

      //   console.log(this.title);
      //   if (this.title == this.carttitle) {
      //     alert("are you sure to delete");
      //     this.http.delete('http://localhost:3000/cart/' + this.title).subscribe(() => {
      //       console.log("mani");
      //     });

      //   }

      // }
      
    })
    // alert("are you sure to remove from cart");
    
    
   }
  
 



  plus(index: any) { 
    this.Increment[index] = ++this.Increment[index];
    this.waveindex = document.getElementById("wave" + index);
    this.price = document.getElementById("price" + index);
    this.saves = document.getElementById("save" + index);
    console.log(this.waveindex);
    // console.log(this.price);
    console.log(this.Increment[0]);
    
    if (this.Increment[index] == 2) {
      this.Rs = this.waveindex.innerText.split('Rs.₹');
      this.priceRs = this.price.innerText.split('Price:');
      this.saveRs = this.saves.innerText.split('save');
   
    } 
   /**actual price spliting */
    console.log(this.priceRs[1]);
    console.log(this.Rs[1]);    
    this.initialsplit[index] = this.Rs[1].split(',').join('');  
    console.log(this.initialsplit);
     console.log(parseInt(this.Rs[1].split(',').join('')));
    console.log(this.Increment[index]);
    this.splitvalue = (parseInt(this.Rs[1].split(',').join('')));
    console.log(this.splitvalue);
    this.waveindex.innerText = "Rs.₹" + (this.initialsplit[index]) * this.Increment[index];
    /**actual price spliting */
    
    /**price spliting */
    this.initialprice[index] = this.priceRs[1];
    console.log(this.initialprice[index]);
    this.splitprice = parseInt(this.initialprice[index]);
    console.log(this.splitprice);
    this.price.innerText = "Rs " + (this.initialprice[index]) * this.Increment[index];
    /**price spliting */
    
    /**save */
    this.initialsave[index] = this.saveRs[1];
    this.splitsave = parseInt(this.initialsave[index]);
    this.saves.innerText= "Save " + (this.initialprice[index]) * this.Increment[index];
    /**save*/


    
   
 
    

   
    
    
  }
    

  




  minus(index:any) {
    if (this.Increment[index]<=1) {
      this.Increment[index] = 1;
      
    }
    else {
       this.Increment[index] = --this.Increment[index];
    }
    
  }


  buynow(title: any, mrp: any, price:any) { 
    const order = {
      title: title,
      mrp: mrp,
      price:price
    }

    this.http.post<any>('http://localhost:3001/postorder', order).subscribe((get) => {
      console.log(get);
      alert("Your Order Placed Successfully");
    })
  }
}
