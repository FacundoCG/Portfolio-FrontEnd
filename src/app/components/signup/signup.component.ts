import { Component } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
 
    user: User = {
      email: '',
      password: ''
    };
  
    constructor(private userService: UserService) { }
  
    register(): void {
      this.userService.registerUser(this.user).subscribe(
        (response: any) => {
          console.log('User registered successfully:', response);
          // You can perform additional actions after successful registration
        },
        (error: any) => {
          console.error('Error occurred while registering user:', error);
          // You can handle the error or display an error message
        }
      );
    }
  }
  
