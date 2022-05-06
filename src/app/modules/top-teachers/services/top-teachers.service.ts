import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn:'root'
  })
export class TopTeachersService {
  basePath = 'http://localhost:3000/api/v1/teachers';


  constructor(private http: HttpClient) {  }

  getAll() {
    return this.http.get(this.basePath)
  }
}
