import { TestBed, async, inject } from '@angular/core/testing';
import { SchoolListComponent } from './school.list.component';
import { SchoolService } from '../../service/school.service';
import { School } from '../../service/school';
import { Observable } from 'rxjs';
import { Http, Response, Headers, URLSearchParams, RequestOptions  } from '@angular/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('School list test',()=>{
    const routes : Routes =[
        {path: 'schools', component: SchoolListComponent }
    ]

    class MockSchoolService { 
        constructor() { }

        getAllSchools(): Observable<School[]> {
            let schools: School[] = [
                new School(1,'Institute 1','Address 1'),
                new School(2,'Institute 2','Address 2'),
                new School(3,'Institute 3','Address 3')
            ];
            return Observable.of(schools);     
        }
        // getSchool(id: number): Observable<School> {
        //     let school: School = new School(1,'Institute 1','Address 1');
        //     return Observable.of(school);     
        // }
      };

    let schoolcomponent;
    let fixture;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [HttpModule, RouterModule.forRoot(routes)],
          declarations: [
            SchoolListComponent
          ],
          providers: [ 
            {provide: SchoolService, useClass: MockSchoolService},
            {provide: APP_BASE_HREF, useValue : '/' }
          ] 
        }).compileComponents();
        fixture = TestBed.createComponent(SchoolListComponent);
        schoolcomponent = fixture.debugElement.componentInstance;
      }));

      it('should create the school', async(() => {
        expect(schoolcomponent).toBeTruthy();
      }));
      it('Button label via async() and whenStable()', async(() => { 
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('h1'))).toBe('Tests');
        // spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        // fixture.whenStable().then(() => { 
        //   fixture.detectChanges();
        //   expect(el.nativeElement.textContent.trim()).toBe('Logout');
        // });
        // component.ngOnInit();
      }));
      it('should create three school', async(() => {
        fixture.detectChanges();
        expect(schoolcomponent.getAllSchools().length).toEqual(3);
      }));
    //   it(`should have as title 'app'`, async(() => {
    //     const fixture = TestBed.createComponent(SchoolListComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app.msg1).toEqual('Hello World');
    //   }));

});