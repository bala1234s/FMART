import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartdataService } from '../cartdata.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  title:any;
  details:any;
  productdetails:any;
  productitems:any;
  toggle:boolean[]=[true]
  img1:any;;
  fdetails:any;
  objfdetails:any;
  image:any;
  titleitem:any;
  rating:any;
  mrp:any;
  offerprice:any;
  discount:any;
  calculate:any;
  splitpercentage:any;
  calprice:any;
  calmrp:any;
  caldiscount:any;
  afterdiscountorg:any;
  afterdiscount:any;
  final:any;
  unlike:any;
  like:any;
  itemlist:any;
  i: any;
  j: any;
  listarray:any=[];
  htmlcolor:any;
  getitem:any;
  postitems:any;
  imageIcon: any;
  item: any;
  favindex: any;
  fav: any;
  initialicon: any;
  furnidetails: any;
  furnilist: any;
  furnitureObjects: any;
  gettinglike: any;
  saveprice: any = [];
  showcartindex: any;
  ManiLke: any = [];
  isFav: any = [];
  buttonbg: any;
  addtocart: any;
  cartIndex: any = [];
  cartadded: any = [];
  
  


  constructor(private http: HttpClient,private service:CartdataService) {
   
    // this.http.get<any>('http://localhost:3000/cart').subscribe((getcart) => { 
    //   const get = getcart.find((find: any) => {
    //     this.addtocart = find;
    //     return find.index && find.added;
    //   })

    this.http.get<any>("http://localhost:3001/cart").subscribe((getCart) => {
      // console.log(getCart.length);
      for (this.i=0; this.i < getCart.length; this.i++){
        this.cartIndex[this.i] = getCart[this.i].index;
        // this.cartadded[this.i] = getCart[this.i].added;
      }
      console.log(this.cartIndex);
      for (this.j = 0; this.j < this.cartIndex.length; this.j++){
        // console.log(this.cartIndex[this.j]);
        
        this.buttonbg = document.getElementById('cart'+this.cartIndex[this.j]);
        this.buttonbg.style.backgroundColor = "green";

        this.buttonbg.innerHTML = "added";
      }
    })
  

    // setting default toggle as true
    this.fdetails = sessionStorage.getItem('fdetails'); //getting input from the JSON as an object
    this.objfdetails = JSON.parse(this.fdetails); // JSON.parse is the JSON object using in .ts 
    console.log(this.objfdetails.list);
    console.log(this.objfdetails.list, "This is list")

    this.itemlist = this.objfdetails.list;
    console.log(this.itemlist);

    /**Product list sessionstorage */
    sessionStorage.setItem('productlist',JSON.stringify(this.itemlist) );
     /**Product list sessionstorage */


    

    http.get<any>("http://localhost:3001/like").subscribe((like) => {
      this.ManiLke = like;
      console.log(this.objfdetails.list.length);
      for (var i = 0; i < this.objfdetails.list.length; i++){
        for (var j = 0; j < this.ManiLke.length; j++){
          if (this.objfdetails.list[i].titleitem == this.ManiLke[j].title) {
            this.isFav[i] = true;
            break;
        }
          else {  
            this.isFav[i] = false;
        }
        }
       
      }
    })
    
    // if (this.objfdetails.list[].fav == 'true') {
    //   this.initialicon = document.getElementById('bala' + this.objfdetails.index);
    //   this.initialicon.className = 'fa-solid fa-heart';


    // }
    this.productdetails = sessionStorage.getItem("itemsname");  // itemsname from the chain of the wood,steel,plastic

    console.log(this.objfdetails.img);
  
    this.img1 = this.objfdetails.img;
    
    /*Discount calulation start */
 
    this.titleitem = this.objfdetails.titleitem;
    this.rating = this.objfdetails.rating;
    this.mrp = this.objfdetails.MRP;
    this.offerprice = this.objfdetails.offerprice;
    this.discount = this.objfdetails.discount;
    console.log(this.itemlist.length);
   


    for (this.i = 0; this.i < this.itemlist.length; this.i++) {


      console.log(this.i, " array ");
   
      console.log(this.objfdetails.list[this.i].discount);
    
      this.caldiscount = parseInt((this.objfdetails.list[this.i].discount).split('%'));
      this.calmrp = parseInt(this.objfdetails.list[this.i].MRP);
      console.log(this.caldiscount, this.calmrp)
      this.afterdiscountorg = (this.caldiscount / 100) * this.calmrp;
      this.afterdiscount = parseInt(this.afterdiscountorg);
      console.log(this.afterdiscountorg);
      this.saveprice.push(this.afterdiscount);
      console.log(this.saveprice);
      this.final = this.calmrp - this.afterdiscount;
      console.log(this.final);
      this.listarray[this.i] = this.final;
      console.log(this.saveprice[this.i]);
      
    }
    console.log(this.saveprice);
    sessionStorage.setItem('save', JSON.stringify(this.saveprice));
    
    


    
   


  }
  
  /* Constructor end */

// like click
  favourites(index: any, titleitem: any, item: any) {
    this.toggle[index] = false;
 
    console.log("favourites");
    console.log(item);
    console.log("new text");
    console.log(item.imgitem);
  this.postitems = {
    img: item.imgitem,
    title: item.titleitem,
    rating: item.rating,
    mrp: item.MRP,
    fav: item.fav,
    index:item.index,
    discount: item.discount,
    save:this.saveprice,
    price: this.listarray[index]
  }
    console.log(this.postitems.save);
    
    
  
  
  console.log(this.objfdetails)
  this.http.get<any>("http://localhost:3001/like").subscribe((getData)=>{
    console.log(getData ,"This is getadata")
    const user = getData.find((getting: any) => {
      console.log(getting);
      this.fav = getting.fav;
      console.log(this.fav)
      this.getitem = getting.id;
      
      return  titleitem==getting.title;



    })
    console.log(user);
    console.log(this.postitems);
    if (user){
      this.http.delete<any>("http://localhost:3001/like/"+this.getitem).subscribe((deleted)=>{
        console.log(deleted, "Deleted");
        alert("arenyou sure remove from like!!!")
        window.location.reload();
      })
    }

    else {
       
      console.log(this.postitems);
     
      
      
      this.http.post<any>("http://localhost:3001/postlike",this.postitems).subscribe((posting)=>{
        console.log("Posted")

      })
    }
  })
  

  console.log();

}

showcart(index:any){
  // this.toggle[index] = !this.toggle;
  this.showcartindex = index;
  console.log("showcart");
  this.favindex = document.getElementById('bala' + index);
  this.favindex.className = 'fa-solid fa-heart';
  sessionStorage.setItem('favindex' + index, 'bala' + index);
  console.log(sessionStorage.getItem('favindex' + index));
  
  this.http.get<any>('http://localhost:3001/like').subscribe((getlike) => { 
    console.log(getlike);
    console.log(this.fav)


    this.gettinglike = getlike;
    console.log(this.gettinglike);



  })




    this.http.get<any>('http://localhost:3001/furniture').subscribe((getfurni) => { 
     
      this.furnitureObjects = getfurni;
      console.log(this.furnitureObjects[0].fdetails[0].list[0].fav);


      this.furnidetails = this.furnitureObjects[0].fdetails;
      console.log(this.furnidetails , "getting furniture details");
      
      console.log(this.furnilist.name, "getting furniture details list");



    })
  
}
  
  likeChecking(dbFav: any, userFav: any,index:any) {
    if (this.furnilist.fav == this.fav) { 
        this.favindex = document.getElementById('bala' + index);
        this.favindex.className = 'fa-solid fa-heart';
        console.log("changed");
      }
  }
  
  pushcart(index: any, titleitem: any, item: any) { 
    this.postitems = {
    img: item.imgitem,
    title: item.titleitem,
    rating: item.rating,
      mrp: item.MRP,
    save:this.saveprice[index],
    discount: item.discount,
      added: "true",
    index:index,
    price:this.listarray[index]
    }
    console.log(this.postitems.save,this.postitems.title);
    
    this.http.get<any>('http://localhost:3001/cart').subscribe((getcart) => { 
      const get = getcart.find((find: any) => { 
        this.addtocart = find;
        return titleitem == find.title;
      })

      if (get) { 
        if (this.addtocart.added == "true") {
          this.buttonbg = document.getElementById('cart'+this.addtocart.index);
          this.buttonbg.style.backgroundColor = "green";
          this.buttonbg.style.color = "white"; 
          this.buttonbg.style.border = "none";
          

        this.buttonbg.innerHTML = "added";
        }
        alert("already in cart");
       
        

      }
      else {
        this.http.post<any>('http://localhost:3001/postcart', this.postitems).subscribe((cart) => { 
          console.log(cart);
           this.buttonbg = document.getElementById('cart'+index);
        this.buttonbg.style.backgroundColor = "green";

        this.buttonbg.innerHTML = "added";
      console.log("cart posting");
    })
        
      }
    })
    
    
  }
}

