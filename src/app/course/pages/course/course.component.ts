import { Component, OnInit } from '@angular/core';
import { CourseService } from "../../services/course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses: Array<any> = [];

  constructor(private courseService: CourseService) { }

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
