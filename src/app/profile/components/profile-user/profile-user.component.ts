import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../auth/models/user.model';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileUserComponent implements OnInit {
  @Input() user: User;
  @Output() logout = new EventEmitter<any>();

  constructor(public translate: TranslateService) {
      translate.addLangs(['en', 'es']);
      translate.setDefaultLang('es');
  }
  switchLang(lang: string) {
      this.translate.use(lang);
  }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit(this.user);
  }

}
