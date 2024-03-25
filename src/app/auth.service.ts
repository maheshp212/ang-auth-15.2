import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  login(user:any){
    if(user.uname === 'admin' && user.pwd === '123abc'){
      localStorage.setItem('currentUser', JSON.stringify({username:'admin', name:'Admin Kumar'}))
      this.router.navigate(['/dashboard']);
    } else {
      console.log('no')
      this.router.navigate(['/login']);
    }
  }
}
