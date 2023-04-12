import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupUsers : any[] = [];

  constructor(private router : Router){

  }

  signupObj : any = {
    username : "",
    email : "",
    password : "",
    cpassword : ""
  };

  onSignup(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem("signupUsers", JSON.stringify(this.signupUsers));
    this.router.navigate(["/login"])
  }
}
