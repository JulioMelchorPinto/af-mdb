import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../auth/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { getUser } from '../../auth/store/auth.selectors';
import * as fromAuth from './../../auth/store/auth.actions';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(
    private store: Store<AppState>,
    public translate: TranslateService) {
      translate.addLangs(['en', 'es']);
      translate.setDefaultLang('es');
  }
  switchLang(lang: string) {
      this.translate.use(lang);
  }

  ngOnInit() {
    this.user$ = this.store.select(getUser);
  }

  updateProfile(userData: any) {
    this.store.dispatch(new fromAuth.UpdateProfile(userData));
  }

  logoutUser(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested({ user }));
  }

}
