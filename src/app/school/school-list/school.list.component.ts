import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SchoolService } from '../../service/school.service';
import { School } from '../../service/school';
 
@Component({
    templateUrl: './school.list.html' ,  
    styleUrls: ['./school.list.component.scss'],
    providers: [ SchoolService ]
})
 
export class SchoolListComponent implements OnInit { 
    observableSchools: Observable<School[]>;
    schools: School[]; 
    errorMessage: String;
    msg1 = 'Hello World';  

    setMsg(valu) {
        this.msg1 = valu;
        console.log(valu);
    }

    constructor( 
        private schoolService: SchoolService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.observableSchools = this.schoolService.getAllSchools();
        this.observableSchools.subscribe(
            schools => this.schools = schools,
            error => this.errorMessage = <any>error);
    }

    navigateToSchoolDetail(id: number) {
        console.log("Id : "+ id);
        this.router.navigate(['/schools',id]);
    }

}