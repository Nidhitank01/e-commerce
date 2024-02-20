import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/profile/signup/signup.component';
import { LoginComponent } from './components/profile/login/login.component';
import { FormDirective } from './Directives/form.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ContactUsComponent,
    CartComponent,
    ProfileComponent,
    ProductComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    FormDirective,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
