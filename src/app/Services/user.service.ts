import { Injectable } from '@angular/core';
import { user } from '../Models/user.model';
import { HttpClient } from '@angular/common/http';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginUser=new Subject<user>()
  constructor(private http:HttpClient) { }
  userList:user[]=[]
  addUser(user:user){

      return this.http.post('http://localhost:3000/AllUser',user)
  }
  getUser(user:user){
    return this.http.get(`http://localhost:3000/AllUser/${user.UserId}`)
  }
  getUserList(){
    return this.http.get('http://localhost:3000/AllUser')
  }
  login(user:any){
    this.getUserList().subscribe((res:user[])=>{
       this.userList=res
       console.log(this.userList)
       
    })
    console.log(this.userList);
    
    this.userList.map((u:user)=>{
      if(u.email===user.email || u.password===user.password){
          return alert('login successfully')
      }
      else{
        return alert('login failed')
      }
    })
  }
   
}
