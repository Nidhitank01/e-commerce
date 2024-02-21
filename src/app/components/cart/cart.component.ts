import { JsonPipe, getLocaleMonthNames } from '@angular/common';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { item } from 'src/app/Models/item.model';
import { user } from 'src/app/Models/user.model';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy,DoCheck{
  cart:item[]=[];
  sub:Subscription
  quantity:number=0
  total:number=0
  user:any
  constructor(private userService:UserService,private productService:ProductService){

  }
 ngOnInit() {
   this.user=JSON.parse(sessionStorage.getItem('token'))
    this.userService.getUser(JSON.parse(sessionStorage.getItem('token'))).subscribe((res:user)=>{
      this.cart=res.cart
    })
  }
  
ngDoCheck(){
  this.Total()
}
ngOnDestroy(): void {
  this.sub?.unsubscribe()
}

QauntityManage(Inc_dec:string,item:item){
  if(Inc_dec==='decrease'){
    if(item.itemQuantity>0){
      item.itemQuantity--
      item.total=item.itemPrice*item.itemQuantity
    }
  }
  if(Inc_dec==='increase'){
    if(item.itemQuantity<item.availQuatity){
      item.itemQuantity++
      item.total=item.itemPrice*item.itemQuantity
    }
  }
}
removeFromCart(Removeitem:any){
 this.cart= this.cart.filter((item:any)=>{
    return item.id!==Removeitem.id
  })
  console.log(this.user);
  this.userService.editCart(this.cart,this.user).subscribe()
}
Total(){
  this.cart.map((item:item)=>{
    this.total=this.total+item.total
    console.log("itemhg:",item.total);
})
}
}
