import { Component, OnInit } from '@angular/core';
declare var AOS: any;
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

ngOnInit(): void {
  AOS.init({});
}
}
