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

  constructor(private TeachersService: TopTeachersService) { }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers() {
    this.TeachersService.getAll().subscribe( (response: any) => {
      this.teachers = response;
      this.teachers.sort((a, b) =>  0 - (a.points < b.points ? -1 : 1));
      this.x = this.teachers[0].points/2000*100;
    })
  }
}
