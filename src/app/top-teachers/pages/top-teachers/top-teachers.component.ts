import { Component, OnInit } from '@angular/core';
import { TopTeachersService } from "../../services/top-teachers.service";

@Component({
  selector: 'app-teachers',
  templateUrl: './top-teachers.component.html',
  styleUrls: ['./top-teachers.component.scss']
})
export class TopTeachersComponent implements OnInit {

  teachers: Array<any> = [];
  x: number = 0;
  top: any;
  constructor(private TeachersService: TopTeachersService) { }

  ngOnInit(): void {
    this.getAllTeachers(1);
  }

  getAllTeachers(directorId: any) {
    this.TeachersService.getAll(directorId).subscribe( (response: any) => {
      this.teachers = response;
      this.teachers.sort((a, b) =>  0 - (a.points < b.points ? -1 : 1));
      this.x = this.teachers[0].point/2000*100;
      this.top = this.teachers[0];
    })
  }
}
