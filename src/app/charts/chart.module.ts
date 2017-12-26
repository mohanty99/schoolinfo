import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular2-highcharts';
import { ChartComponent } from './chart.component';

@NgModule({
    imports:      [BrowserModule, ChartModule.forRoot(require('highcharts'))],
    declarations: [ChartComponent],
    bootstrap:    [ChartComponent]
})

export class CharttingModule {

}