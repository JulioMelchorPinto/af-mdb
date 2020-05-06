import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Observable } from 'rxjs';
import { getIsLoggedIn, getIsLoading } from '../../auth/store/auth.selectors';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    public translate: TranslateService) {
      translate.addLangs(['en', 'es']);
    }

  switchLang(lang: string) {
      this.translate.use(lang);
  }

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(getIsLoggedIn);
    this.isLoading$ = this.store.select(getIsLoading);
  }

}
