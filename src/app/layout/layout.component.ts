import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  language = 'zh_CN';
  isCollapsed: Boolean = false;
  isCollapsedM: Boolean = true;
  isMobile = false;
  username = window.localStorage.getItem('Username') || 'username';
  pathname: Array<string>;
  siderData: Array<any> = [
    {
      key: 1,
      title: 'dashboard',
      icon: 'user',
      url: '/dashboard',
      isLeaf: true
    },
    {
      key: 2,
      title: 'subnav ',
      icon: 'laptop',
      open: true,
      children: [
        {
          key: 21,
          title: 'test',
          url: '/test',
          isLeaf: true
        }
      ]
    },
  ];
  menuSelected: string;
  visible = false; // 抽屉
  production = environment.production;

  constructor(
    private authService: AuthService,
    private nzI18nService: NzI18nService,
    private translate: TranslateService,
    private router: Router,
  ) { }

  ngOnInit() {
    // 登陆验证
    this.authService.auth();

    // 监控屏幕宽度
    if (document.documentElement.clientWidth < 480) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    this.fromEvent(window, 'resize')
      .subscribe((e) => {
        if (document.documentElement.clientWidth < 480) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });

    this.menuSelected = window.location.pathname;
    // 当前路径--面包屑
    const path = window.location.pathname.split('/');
    path[0] = 'Home';
    this.pathname = path;
  }

  // 监控屏幕宽度
  fromEvent(target, eventName) {
    return new Observable((observer) => {
      const handler = (e) => observer.next(e);

      // Add the event handler to the target
      target.addEventListener(eventName, handler);

      return () => {
        // Detach the event handler from the target
        target.removeEventListener(eventName, handler);
      };
    });
  }

  // mobile下的菜单点击跳转
  onTreeClick(event) {
    if (event.node.origin.url) {
      this.router.navigate([event.node.origin.url]);
    }
  }

  // 设置语言
  setLocale() {
    console.log(this.language);
    this.translate.use(this.language);
  }

  onChange(): void {
    this.visible = !this.visible;
  }
  close(): void {
    this.visible = false;
  }
}
