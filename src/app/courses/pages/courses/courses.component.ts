import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../../services/courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Array<any> = [];

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAll()
      .subscribe( (response: any) => {
        this.courses = response;
      })
  }

}
