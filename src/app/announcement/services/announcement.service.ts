import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  basePath = 'http://localhost:8080/api/v1'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log(`Ann error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      )
    }
    return throwError('Something happened with request, please try again later');
  }

  create(directorId: any, item: any) {
    return this.http.post(`${this.basePath}/directors/${directorId}/announcements`, item, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getAllAnnouncements(directorId: any) {
    return this.http.get(`${this.basePath}/directors/${directorId}/announcements`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  delete(id: any) {
    return this.http.delete(`${this.basePath}/announcements/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  update(id: any, item: any) {
    return this.http.put(`${this.basePath}/announcements/${id}`, item, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
