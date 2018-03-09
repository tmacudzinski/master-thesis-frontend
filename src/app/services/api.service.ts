import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StudentLoginDetails} from '../models/student-login-details';
import { environment } from '../../environments/environment';
import {Test} from '../models/test';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private token: string;

  loginStudent(studentLoginDetails: StudentLoginDetails): void {

    this.http.post(`${environment.baseUrl}/login`, studentLoginDetails).subscribe(
      (token: string) => { this.token = token; },
      (error) => { throw new Error('nieudane uwierzytelnianie: ' + error.toString()); }
    );
  }

  getDrawnQuestions(): Observable<Test> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get(`${environment.baseUrl}/drawnQuestions`, {headers});
  }
}
