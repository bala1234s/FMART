import { BlockParameter } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name:any="";
  lastname: any;
  profile: any;

  constructor() {
    
    if (sessionStorage.getItem('isLogged') == 'true') {
      this.profile = sessionStorage.getItem('profile');
      this.profile = JSON.parse(this.profile);
      this.name =this.profile.firstname;
      this.lastname = this.profile.secondname;
    }
    else { 
      this.name = "";
    }
    
  }
  
}
