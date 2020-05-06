import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule, ButtonsModule, InputsModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './containers/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MainProfileComponent } from './components/main-profile/main-profile.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';

import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CardsModule,
    ButtonsModule,
    InputsModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [ProfileComponent, MainProfileComponent, ProfileUserComponent],
  exports: [ProfileComponent]
})
export class ProfileModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}