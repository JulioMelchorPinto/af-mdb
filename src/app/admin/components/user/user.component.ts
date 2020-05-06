import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  @Input() user: any;
  @Output() userSelected = new EventEmitter<any>();
  @Output() addAdmin = new EventEmitter<any>();
  @Output() removeAdmin = new EventEmitter<any>();

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
  }

  switchLang(lang: string) {
      this.translate.use(lang);
  }

  ngOnInit() {
  }

  selectUser() {
    this.userSelected.emit(this.user);
  }

  addAdminPrivileges() {
    this.addAdmin.emit(this.user);
  }

  removeAdminPrivileges() {
    this.removeAdmin.emit(this.user);
  }

}
