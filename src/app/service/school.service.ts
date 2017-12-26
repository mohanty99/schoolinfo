import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { School } from '../service/school';

@Injectable()
export class SchoolService {
    url = 'http://localhost:14788/api';

    constructor(private http: Http) { }

    getAllSchools(): Observable<School[]> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.get(this.url+"/schools")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getSchool(id: number): Observable<School> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.get(this.url + "/schools/" + id)
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