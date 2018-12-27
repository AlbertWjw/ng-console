import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient, ) { }

  // 登陆状态验证
  auth(): void {
    const localUserLog = window.localStorage.getItem('Username');
    if (!localUserLog) {
      this.router.navigate(['/login']);
    }
  }

  // 退出登陆
  logout(): void {
    window.localStorage.removeItem('Username');
    this.router.navigate(['/login']);
  }
}
