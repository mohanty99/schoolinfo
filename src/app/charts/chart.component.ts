import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }    from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { ChartModule }            from 'angular2-highcharts'; 


@Component({
    selector: 'my-app',
    styles: [`
      chart {
        display: block;
      }
    `],
    template: `<chart [options]="options"></chart>`
})
export class ChartComponent {
    constructor() { 
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129],
            }]
        };
    }
    options: Object;
}