import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { item } from 'src/app/Models/item.model';
import { user } from 'src/app/Models/user.model';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products:item[]=[]
 @Input()LogedUser:user
 constructor(private productService:ProductService,private http:HttpClient,private userService:UserService){
 }
 ngOnInit(){
  this.productService.getAllItem().subscribe((res:item[])=>{
    this.products=res
    console.log(this.products);
    
  }) 
  
  this.userService.getUser(JSON.parse(sessionStorage.getItem('token'))).subscribe((res:user)=>{
    console.log("from server",res);
    this.LogedUser=res
  })
    // console.log("cart:",this.LogedUser); 
}

    addToCart(product:item){
       this.userService.addToCart(product,this.LogedUser).subscribe((res:user)=>{
        console.log("in product compoenent",res.cart);
        
        //  this.userService.itemAddedInCart.next(res.cart)
       })
    }
}
