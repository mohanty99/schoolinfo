import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StudentService } from '../service/student.service';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student.list.component';
import { Student } from '../service/student';

@NgModule({
    imports:[
        HttpModule,
        BrowserModule,
        CommonModule
    ],
    declarations:[ 
                    StudentAddComponent, 
                    StudentDetailComponent,
                    StudentEditComponent,
                    StudentListComponent
                ],
    providers:[
            StudentService
    ]
})

export class StudentModule{

}