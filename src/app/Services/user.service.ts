import { Injectable } from '@angular/core';
import { user } from '../Models/user.model';
import { HttpClient } from '@angular/common/http';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Subject } from 'rxjs';
import { item } from '../Models/item.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginUser=new Subject<user>()
  item:item
  itemAddedInCart=new Subject<item>()
  constructor(private http:HttpClient) { }
  userList:user[]=[]
  addUser(user:user){
      return this.http.post('http://localhost:3000/AllUser',user)
  }
  getUser(user:any){
    return this.http.get(`http://localhost:3000/AllUser/${user.id}`)
  }
  getUserList(){
    return this.http.get('http://localhost:3000/AllUser')
  }
  login(user:any){
    this.getUserList().subscribe((res:user[])=>{
       this.userList=res
       console.log(this.userList)  
    }) 
    this.userList.map((u:user)=>{
      if(u.email===user.email || u.password===user.password){
          return alert('login successfully')
      }
    })
    return alert('')
  }
  addToCart(product:any,user:any){
     const cart:[]=user.cart
    const i =cart.filter((item:any)=>{
        if(item.id===product.id){
          return item
        }
    })
  if(i.length!=0){
    alert('item already exist in cart!') 
  }
  else{
    user.cart.push(product)
    this.itemAddedInCart.next(product)
  }
  
    return  this.http.put(`http://localhost:3000/AllUser/${user.id}`,user)
  }
  editCart(cart:item[],user:any){
    user.cart=cart
    return  this.http.put(`http://localhost:3000/AllUser/${user.id}`,user)
  }
  TotalBill(cart:item[]){
    
  }
  }
   

