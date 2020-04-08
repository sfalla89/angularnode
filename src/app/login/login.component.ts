import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:string;
  name:string;
  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  });
  constructor(private _router:Router,private user:UserService) { }

  ngOnInit() {
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');
      this.errorMessage = "Username/Password is in-correct, Please try again...!"
      return;
    }
     console.log(JSON.stringify(this.loginForm.value));
     this.user.login(JSON.stringify(this.loginForm.value))
     .subscribe(
       data=>{console.log("Data:"+data);this.name=JSON.stringify(data);this._router.navigate(['/user',this.name]);} ,
       error=>{ console.error(error); this.errorMessage = "Username/Password is in-correct, Please try again...!"}
     )
  }

  googlePlus()
  {
    this.user.googleConnect().subscribe(
      data=>console.log("Data:"+JSON.stringify(data)),
      error=>console.error(error)
    )
  }
}
