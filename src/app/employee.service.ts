import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from './user';

@Injectable({
    providedIn: 'root'
  })
export class EmployeeService {
    constructor(private http: HttpClient) { }
   
     getUsers(): Observable<any> {
       return this
               .http
                 .get("http://localhost:5000/show")
               .pipe(
                 map(res => res)
             );
         }
  }