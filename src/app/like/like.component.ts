import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  liked: any;
  likeindex: any;
  titleapi: any;
  constructor(private http:HttpClient,private route:Router){
    http.get<any>('http://localhost:3001/like').subscribe((like)=>{
      console.log(like);
      this.liked=like;

    })

  }
  deletelike(title: any) {
    console.log(this.liked);
     const data = this.liked.find((findlike: any) => {
          console.log(findlike.title);
          this.likeindex = findlike.email;
          this.titleapi = findlike.title;
          return title == findlike.title;
          
     });
    if (data) { 
      console.log(this.titleapi);
          let obj = {
            title: this.titleapi
          }
          this.http.post<any>("http://localhost:3001/dellike" ,obj).subscribe((deleted) => {
            console.log("deleted");
            this.route.navigateByUrl('like').then(() => { 
              window.location.reload();
            });
          

            // window.location.reload();
          })
    }
   }

}
