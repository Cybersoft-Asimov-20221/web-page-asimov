import { Component, OnInit } from '@angular/core';
import {TeachersService} from "../../services/teachers.service";
import {ActivatedRoute} from "@angular/router";
import {CoursesService} from "../../../courses/services/courses.service";

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  teachers:any = []
  teacher:any  = {}
  courses: any = []
  percentProgress: number = 0
  constructor(private teacherService: TeachersService, private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getAllTeachers();

  }

  ngAfterViewInit() {
    this.getTeacherById();
    this.getAllCourses();

  }
  //Teachers
  getAllTeachers() {
    this.teacherService.getAll().subscribe((response:any)=>{
      this.teachers = response;
    })
  }

  getTeacherById() {
    let teacherId;
    this.route.paramMap.subscribe(params => {
      teacherId = params.get('id');
    })
    this.teacherService.getById(teacherId)
      .subscribe( (response: any) => {
        this.teacher = response;
        this.percentProgress = this.teacher.points/2000*100; //->assign value in percent
      })
  }
  //Courses
  getAllCourses() {
    this.coursesService.getAll().subscribe((response:any)=>{
      this.courses = response;
    })
  }
}
