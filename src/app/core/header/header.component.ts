import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../auth/models/user.model';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;

  @Output() logout = new EventEmitter<User>();

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es'); 
  }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit(this.user);
  }

  switchLang(lang: string) {
      this.translate.use(lang);
  }

}
