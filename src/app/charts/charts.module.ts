import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule, CardsModule, ButtonsModule, TableModule } from 'angular-bootstrap-md';
import { ChartsComponent } from './containers/charts/charts.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartsRoutingModule } from './charts-routing.module';

import * as fromCharts from './store/charts.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChartsEffects } from './store/charts.effects';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    CardsModule,
    ChartsModule,
    ButtonsModule,
    TableModule,
    ChartsRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    StoreModule.forFeature('charts', fromCharts.chartsReducer),
    EffectsModule.forFeature([ChartsEffects])
  ],
  declarations: [ChartsComponent, LineChartComponent, BarChartComponent, DoughnutChartComponent, PieChartComponent],
  exports: [ChartsComponent, LineChartComponent]
})
export class ChartsDataModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
