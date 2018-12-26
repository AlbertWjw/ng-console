import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const localUserLog = window.localStorage.getItem('Username');
    if (localUserLog) {
      this.router.navigate(['/']);
    }
  }

  // 临时
  next = () => {
    window.localStorage.setItem('Username', 'admin' + Math.round(Math.random() * 10));
    this.router.navigate(['/']);
  }
}
