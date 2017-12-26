import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Student } from './student';

@Injectable()
export class StudentService {
    url = 'http://localhost:14788/api';

    constructor(private http: Http) { }

    getAllStudents(): Observable<Student[]> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.get(this.url+"/students")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getStudent(Id: number): Observable<Student> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.get(this.url + "/students/" + Id)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}
