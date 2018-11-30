import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient, ) { }

  // 登陆状态验证
  auth(): any {
    const localUserLog = window.localStorage.getItem('Username');
    console.log(localUserLog);
    if (!localUserLog) {
      this.router.navigate(['/login']);
      window.localStorage.setItem('Username', 'admin1');
    } else {
      // this.http.get('/user/login');
    }
  }
}
