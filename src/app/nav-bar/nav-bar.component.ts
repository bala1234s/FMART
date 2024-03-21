import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  checklog: boolean = true;
  logout: boolean = false;

  constructor(private route : Router) {
  if(sessionStorage.getItem('isLogged')=='true') { 
    this.checklog = false;
    this.logout = true;
  } 
  else{ 
    this.checklog = true;
    this.logout = false;
  }
  }

  logOut() {
    if (confirm("Are you sure to logout?")) {
      sessionStorage.setItem('isLogged', 'false');
    this.checklog = true;
      this.logout = false;
      this.route.navigateByUrl('').then(() => {
        window.location.reload();
      });
      
     
    }
  
    
  }
 
  

}
