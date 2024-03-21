import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


import { ProductListComponent } from './product-list/product-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LikeComponent } from './like/like.component';
import { loginrouteGuard } from './loginroute.guard';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },

  {
    path:'product',
    component:ProductComponent
  },
 
  {
    path:'productlist',
    component:ProductListComponent,canActivate : [loginrouteGuard]
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'like',
    component:LikeComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path: 'help',
    component:HelpComponent
  },
  {
    path: 'admin',
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
