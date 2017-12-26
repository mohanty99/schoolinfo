import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolListComponent } from './school/school-list/school.list.component';
import { SchoolDetailComponent } from './school/school-detail/school-detail.component';
import { StudentAddComponent  } from './student/student-add/student-add.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentListComponent } from './student/student-list/student.list.component';
import { ChartComponent } from './charts/chart.component';

const routes : Routes =[
    {path: 'x', component: HomeComponent },
    {path: 'schools', component: SchoolListComponent },
    {path: 'schools/:id', component: SchoolDetailComponent },
    {path: 'students', component:StudentListComponent },
    {path: 'students/:Id', component:StudentDetailComponent },
    {path: 'students/edit/:Id', component:StudentEditComponent },
    {path: 'students/add/:Id', component:StudentAddComponent },
    {path: 'charts', component:ChartComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports:[ RouterModule ]
})

export class AppRoutingModule{

}