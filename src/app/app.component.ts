import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { user } from './Models/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { item } from './Models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Brain';
  @Input()loggedInUser:user
  login:Subscription
  cartSub:Subscription
  cartItemCount:number=0
  public token:user
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(){
   this.token=JSON.parse(sessionStorage.getItem('token'))
   if(this.token){
      this.loggedInUser=this.token
   }
   this.cartSub=this.userService.itemAddedInCart.subscribe(()=>{
    this.cartItemCount++
   })
  }
  logout(){
    this.login.unsubscribe()
    this.loggedInUser=null
    alert('logout')
    this.router.navigate([''])
    
  }
  oncart(){
    this.cartItemCount=0
    this.router.navigate(['cart'])
  }
}
