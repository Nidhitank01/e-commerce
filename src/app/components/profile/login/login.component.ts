import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormDirective } from 'src/app/Directives/form.directive';
import { UserService } from 'src/app/Services/user.service';
import { SignupComponent } from '../signup/signup.component';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { user } from 'src/app/Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user:FormGroup;
  loginUser:user;
  sub:Subscription
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute){};
  @Output() cancel=new Subject<void>();
  ngOnInit(): void {
    this.user=new FormGroup({
         email:new FormControl(null,Validators.required),
         password:new FormControl(null,Validators.required)
    })
  }
  onLogin(){
    if(this.user.valid){
      console.log(this.user.value)
      this.userService.getUserList().subscribe((res:user[])=>{
        res.map((u)=>{
          if(u.email===this.user.value.email || u.password===this.user.value.password){
            alert('login successful')
            sessionStorage.setItem('token',JSON.stringify(u))
            this.userService.loginUser.next(u)
            this.router.navigate([''])
          }
          else{
            alert('email or password must be wrong')
          }
        })
      })

    }
  }
  onclick(){
    this.router.navigate(['profile/signup'])
  }
}
