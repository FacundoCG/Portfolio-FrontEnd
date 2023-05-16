import { Component } from '@angular/core';
import { User } from 'src/app/classes/user';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:User = new User();
  
  constructor(private signupuserservice: SignupService){}

  ngOnInit () : void{
  }

  userSignUp(){
    console.log(this.user);
    this.signupuserservice.signUp(this.user).subscribe(data=>{
      alert("Sign up successfully")
    }, error=>alert("Couldn't sign up"));
  }
}
