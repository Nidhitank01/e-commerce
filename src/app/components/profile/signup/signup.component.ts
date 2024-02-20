import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{
  user:FormGroup
  @Input() signup:boolean
  @Output() cancel=new Subject<void>();
  constructor(private userService:UserService,private  router:Router){}
 ngOnInit(): void {
  this.user=new FormGroup({
    UserId:new FormControl((Math.random()*100).toFixed(0)),
    name:new FormControl(null,Validators.required),
    email:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    phone_no:new FormControl(null,Validators.required),
    address:new FormControl(null,Validators.required),
    city:new FormControl(null,Validators.required),
    state:new FormControl(null,Validators.required),
    pincode:new FormControl(null,Validators.required),
    cart:new FormControl([])
   })
 }
 onSign(){
  if(this.user.valid){
    console.log(this.user.value);
    this.userService.addUser(this.user.value).subscribe(res=>{
      alert('user added successfully!')
      this.user.reset()
      this.onclick()
    })
  }}
  onclick(){
    this.router.navigate(['profile/login'])
  }
}
