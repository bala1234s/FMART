import { Component, OnInit } from '@angular/core';
declare var AOS: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
 ngOnInit(): void {
   AOS.init({});
 }
}
