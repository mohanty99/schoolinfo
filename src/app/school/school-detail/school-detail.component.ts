import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../service/school.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { School } from '../../service/school';

@Component({
    selector: 'school-detail',
    templateUrl: './school-detail.html',
    
    providers:[SchoolService]
})

export class SchoolDetailComponent implements OnInit{

    id: number;
    schoolDetail: Observable<School>;
    school: School;
    errorMessage: String;
    private sub: any;

    constructor(private route: ActivatedRoute,
                private schoolService: SchoolService){

    }

    ngOnInit(){
        console.log('log');
        console.log(this.route.snapshot.params.Id);
        this.sub = this.route.params.subscribe(params=>{
            this.id = +params['id'];
        });

        this.schoolDetail = this.schoolService.getSchool(this.id);
        this.schoolDetail.subscribe(
            school =>this.school = school,
            error => this.errorMessage = <any>error);

    }


}