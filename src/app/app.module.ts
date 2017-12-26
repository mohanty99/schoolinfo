import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './home/header.component';

import { HomeModule } from './home/home.module';
import { SchoolModule } from './school/school.module'
import { StudentModule } from './student/student.module';
import { CharttingModule } from '../app/charts/chart.module';
import { AppRoutingModule } from './app-routing.module'


@NgModule({   
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      HomeModule,
      SchoolModule,
      StudentModule,
      CharttingModule,
      AppRoutingModule
    ],
  declarations: [ 
      AppComponent,
      HeaderComponent
  ],
  providers: [ ], 
  bootstrap: [ AppComponent ]
})
export class AppModule { }