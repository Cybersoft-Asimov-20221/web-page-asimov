import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  isTeacher: boolean = true;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getById(1);
  }

  getById(id: any) {
    if (this.isTeacher) {
      this.profileService.getTeacherById(id)
        .subscribe( (response:any) => {
          this.user = response;
        })
    }
    else {
      this.profileService.getDirectorById(id)
        .subscribe( (response:any) => {
          this.user = response;
        })
    }
  }
}
