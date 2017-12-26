import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from '../../service/student.service';
import { Student } from '../../service/student';
 
@Component({
    templateUrl: './student.list.html' ,  
    providers: [ StudentService ]
})
 
export class StudentListComponent  { 
    observableStudents: Observable<Student[]>;
    students: Student[];
    errorMessage: String;
    id: number;

    constructor(
        private studentService: StudentService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.observableStudents = this.studentService.getAllStudents();
        this.observableStudents.subscribe(
            students => this.students = students,
            error => this.errorMessage = <any>error);
    }
    navigateToStudentDetail(Id: number) : void{
        console.log("navigates to:"+Id);
        this.router.navigate(['/students', Id]); 
    }

    navigateToStudentEdit(Id: number) : void{
        console.log("edits to:"+Id);
        this.router.navigate(['/students/edit', Id]); 
    }

}