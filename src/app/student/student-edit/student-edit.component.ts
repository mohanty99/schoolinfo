import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormArray, FormBuilder,
    Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { Student } from '../../service/student';
import { Observable } from 'rxjs';

@Component({
    selector: 'student-edit',
    templateUrl: 'student-edit.html'
})

export class StudentEditComponent {
    
    // name = new FormControl('', [Validators.required, Validators.maxLength(15)]);
    // age = new FormControl(20, Validators.required);  
    // city = new FormControl();
    // country = new FormControl({value: 'India', disabled: true});
    // married = new FormControl(true);

    // Id: number;
    // sub: any;
    // student: Student;
    // errorMessage: string;
    // studentObservable: Observable<Student>;

    // name = new FormControl(); 
    // address = new FormControl(); 
    // dob = new FormControl(); 

    // constructor(private router: Router,
    //             private route: ActivatedRoute,
    //             private params: Params,
    //             private studentService: StudentService ){
    // }

    // ngOnInit(): void
    // {
    //     this.sub = this.route.params.subscribe(params => {
    //         this.studentObservable = this.studentService.getStudent(this.Id);
    //         this.studentObservable.subscribe(
    //             student => this.student = student,
    //             error => this.errorMessage = <any>error
    //         );
    //     });
    //     this.name.setValue(this.student.StudentName);
    //     this.address.setValue(this.student.StudentAddress);
    // }
} 