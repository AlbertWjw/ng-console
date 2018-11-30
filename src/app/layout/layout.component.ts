import { Component, OnInit } from '@angular/core';
import { AuthService } from '../serves/auth.service';
import { Observable } from 'rxjs';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  language = 'zh_CN';
  isCollapsed: Boolean = false;
  isMobile = false;
  username = window.localStorage.getItem('Username') || 'username';

  constructor(
    private authService: AuthService,
    private nzI18nService: NzI18nService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.authService.auth();

    // 监控屏幕宽度
    if (document.documentElement.clientWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    this.fromEvent(window, 'resize')
      .subscribe((e) => {
        if (document.documentElement.clientWidth < 768) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });
  }

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

  setLocale() {
    console.log(this.language);
    this.translate.use(this.language);
  }
}
