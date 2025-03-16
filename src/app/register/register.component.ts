import { Component } from '@angular/core';
import {FormBuilder,Validator,FormsModule,FormGroupName, Validators} from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { first } from 'rxjs';
import { RegisterdetailsService } from '../registerdetails.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname:any;
  secondname:any;
  email:any;
  phone:any;
  address:any;
  password: any;
  button: any;
  alert: boolean = false;
  postValue: any;

  



  constructor(private form: FormBuilder, private http: HttpClient, private service: RegisterdetailsService) {
    // setInterval(() => {
    //   this.alert = service.alert;
    // }, 1000);
  }
  formvalid=this.form.group({
    firstname:['',Validators.required],
    secondname:['',Validators.required],
    email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    phone:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}')]],
    confirm:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}')]]
  })

  submit() {
 
       
    this.firstname = this.formvalid.controls['firstname'].value;
    this.email= this.formvalid.controls['email'].value
    
    console.log(this.formvalid.value);
    this.postValue = this.formvalid.value;
    console.log(this.formvalid);
    
    this.formvalid.reset();

    

    this.service.RegisterDetails().subscribe((post) => { 
      const data = post.find((subscribe: any) => {
         return this.email == subscribe.email;
       })
      
         if (data) {
        alert("Your already register");
      }
      else { 
        this.http.post<any>('http://localhost:3001/postpersonaldetails',this.postValue).subscribe((post) => { 
          console.log(post);
          this.button = document.getElementById('button');
          this.button.style.backgroundColor = 'green';
          this.alert = true;
        

          
        })
      }

        
    }) 
    

    


    


  }


}

