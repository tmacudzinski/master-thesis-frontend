import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Test} from '../models/test';

@Injectable()
export class ApiService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
  }

  private token: string;

login(username: string, password: string): Observable<void> {

      let header = new HttpHeaders();
      header.append('Authorization', `Basic ${btoa(username + ':' + password)}`);

      return this.http.get<void>(`${environment.baseUrl}/login`, { headers: header, withCredentials: true});
}

  getTests(): Observable<Array<Test>> {
    return this.http.get<Array<Test>>(`${environment.baseUrl}/tests`, {headers: this.headers, withCredentials: true});
  }

  addTest(newTest: Test): Observable<Test> {
    return this.http.post<Test>(`${environment.baseUrl}/tests`, newTest, {headers: this.headers, withCredentials: true});
  }

  getTestById(id: number): Observable<Test> {
    return this.http.get<Test>(`${environment.baseUrl}/tests/${id}`, {headers: this.headers, withCredentials: true});
  }
}
