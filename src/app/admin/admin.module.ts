import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './containers/admin/admin.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';

import * as fromAdmin from './store/admin.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/admin.effects';
import { CollapseModule, CardsModule, ButtonsModule, BadgeModule, IconsModule, DropdownModule } from 'angular-bootstrap-md';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [AdminComponent, UsersListComponent, UserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    CollapseModule,
    CardsModule,
    DropdownModule,
    BadgeModule,
    ButtonsModule,
    IconsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    StoreModule.forFeature('admin', fromAdmin.adminReducer),
    EffectsModule.forFeature([AdminEffects])
  ]
})
export class AdminModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}