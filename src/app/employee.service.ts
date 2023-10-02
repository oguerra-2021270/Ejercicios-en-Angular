import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data/employees1.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(
                          catchError(this.errorHandler));
  }
  

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || "Server error"))
  }
}
