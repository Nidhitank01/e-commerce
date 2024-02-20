import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:FormGroup
 @Input() signup:boolean=false
 @Input() login:boolean=false
 constructor(private userService:UserService){}
 ngOnInit(): void {
  if(sessionStorage.getItem('user')){
    this.signup=true
  }
 }

}
