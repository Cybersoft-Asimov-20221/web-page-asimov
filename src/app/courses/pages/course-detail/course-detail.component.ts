import {AfterViewInit, Component, OnInit } from '@angular/core';
import { CoursesService } from "../../services/courses.service";
import { ItemsService } from "../../services/items.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit, AfterViewInit {

  courses: Array<any> = [];
  items: Array<any> = [];
  course: any = {};

  constructor(private coursesService: CoursesService, private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCourses();
    this.getAllItems();
  }

  ngAfterViewInit() {
    this.getCourseById();
  }

  getAllCourses() {
    this.coursesService.getAll()
      .subscribe( (response: any) => {
        this.courses = response;
      })
  }
  getAllItems() {
    this.itemsService.getAll()
      .subscribe( (response: any) => {
        this.items = response;
      })
  }

  getCourseById() {
    let courseId;
    this.route.paramMap.subscribe(params => {
      courseId = params.get('id');
    })
    this.coursesService.getById(courseId)
      .subscribe( (response: any) => {
        this.course = response;
      })
  }


}
