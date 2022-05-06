import { Component, OnInit } from '@angular/core';
import {AnnouncementService} from "../../services/announcement.service";

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  announcement: Array<any> = [];

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.getAllAnnouncements();
  }
  getAllAnnouncements(){
    return this.announcementService.getAllAnnouncements().subscribe((response: any)=>{
      this.announcement = response;
    })
  }

}
