import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = "http://localhost:8080/signup";
  constructor(private httpClient: HttpClient) {}

  signUp(user: User) :Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user);
  }
}
