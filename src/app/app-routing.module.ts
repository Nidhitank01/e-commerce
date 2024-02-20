import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/profile/login/login.component';
import { SignupComponent } from './components/profile/signup/signup.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'shop',component:ShopComponent},
 {path:'contact-us',component:ContactUsComponent},
 {path:'profile',component:ProfileComponent,children:[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
 ]},
 {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
