import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterdetailsService } from '../registerdetails.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: any;
  password: any;



  constructor(private form: FormBuilder, private service: RegisterdetailsService, private route:Router) {
   
  
  }
  formlogin = this.form.group({
      
    email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    password:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}')]]
  })
  



  login() {
     this.email = this.formlogin.controls['email'].value;
    this.password = this.formlogin.controls['password'].value;

    this.service.RegisterDetails().subscribe((get) => { 
      const data = get.find((find: any) => { 
         const profiledetails = { 
          firstname: find.firstname,
          secondname: find.secondname,
          email: find.email

        };
        sessionStorage.setItem('profile', JSON.stringify(profiledetails));
        return this.email == find.email && this.password == find.password;
        
        

      })

      if (data) { 
        sessionStorage.setItem('isLogged', 'true');
        this.route.navigateByUrl('').then(() => {
          
          window.location.reload();
        });
      }
      else{
        alert("not found");
      }
    })
   }

  
   
  
  

}
