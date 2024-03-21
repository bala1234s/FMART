import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'furniture';
  value = 'bala';
  footerclass: boolean = true;
  constructor(private rout: Router) {
    rout.events.subscribe((routeLink) => {
      if (routeLink instanceof NavigationEnd) {
        if (routeLink.url == "/login") {
          this.footerclass = false;
        }
        else {
          this.footerclass = true;
        }
      }
    })
  
  }
}
