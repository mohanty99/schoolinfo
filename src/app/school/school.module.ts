import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { SchoolEditComponent } from './school-detail/edit/school-edit.component';
import { SchoolListComponent } from './school-list/school.list.component';
import { SchoolService } from '../service/school.service';
import {  } from './service/student.service';


@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        CommonModule
    ],
    declarations: [
        SchoolDetailComponent,
        SchoolEditComponent,
        SchoolListComponent
    ],
    providers: [
        SchoolService
    ] 
})

export class SchoolModule {

}