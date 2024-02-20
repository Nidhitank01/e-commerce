import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { user } from './Models/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Brain';
  loggedInUser:user
  login:Subscription
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(){
   this.login=this.userService.loginUser.subscribe((res:user)=>{
      this.loggedInUser=res
      console.log(this.loggedInUser)
    })
  }
  logout(){
    this.login.unsubscribe()
    this.loggedInUser=null
    alert('logout')
    this.router.navigate([''])
    
  }
}
