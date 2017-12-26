import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { Student } from '../../service/student';

@Component({
    templateUrl: 'student-detail.html',
    providers: [ StudentService ]
})

export class StudentDetailComponent implements OnInit {

    observableStudentDetail: Observable<Student>;
    student: Student;
    errorMessage: String;
    Id: number;
    private sub: any;


    constructor(
        private studentService: StudentService,
        private router: Router,
        private route: ActivatedRoute
        //private params: Params
    ) { }
    
    ngOnInit(): void
    {
        console.log('log');
        console.log(this.route.snapshot.params.Id);

        this.sub = this.route.params.subscribe(params => {
            this.Id = +params['Id']; // (+) converts string 'id' to a number
            console.log('Id value:');
            console.log(this.Id);
        });
        
        this.observableStudentDetail = this.studentService.getStudent(this.Id);
        this.observableStudentDetail.subscribe(
            student => this.student = student,
            error => this.errorMessage = <any>error);

    }

}

