import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  isAdmin = false;

  constructor() { }

  login(username: string , password: string): boolean {
    if(username === 'Admin' && password === 'Admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if(username === 'User' && password === 'User') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
