import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './containers/projects.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule, InputsModule, CardsModule, WavesModule, IconsModule, ModalModule } from 'angular-bootstrap-md';

import * as fromProjects from './store/projects.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './store/projects.effects';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    SharedModule,
    ProjectsRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonsModule,
    InputsModule,
    WavesModule,
    IconsModule,
    CardsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    StoreModule.forFeature('projects', fromProjects.projectsReducer),
    EffectsModule.forFeature([ProjectsEffects])
  ],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
})
export class ProjectsModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
