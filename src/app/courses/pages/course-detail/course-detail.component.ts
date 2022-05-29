import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import { CoursesService } from "../../services/courses.service";
import { ItemsService } from "../../services/items.service";
import { ActivatedRoute } from "@angular/router";
import { CompetencesService } from "../../services/competences.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface ItemData {
  id: number;
  name: string;
  description: string;
  status: boolean;
  idCourse: number;
}

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit, AfterViewInit {

  courses: Array<any> = [];
  items: Array<any> = [];
  competences: Array<any> = [];
  course: any = {};

  constructor(private coursesService: CoursesService, private itemsService: ItemsService,
              private route: ActivatedRoute, private competencesService: CompetencesService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCourses();
    this.getAllItems();
    this.getAllCompetences();
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
  getAllCompetences() {
    this.competencesService.getAll()
      .subscribe( (response: any) => {
        this.competences = response;
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

  openDialog(item: any) {
    const dialogRef = this.dialog.open(DialogCourse, {
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-course',
  templateUrl: 'dialog-course.html',
  //template: 'passed in {{data.name}}'
})
export class DialogCourse {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ItemData, private _sanitizer: DomSanitizer) {}

  getVideoIframe(url: any) {
    var video, results;

    if (url === null) {
      return '';
    }
    results = url.match('[\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl(video);
  }
}
