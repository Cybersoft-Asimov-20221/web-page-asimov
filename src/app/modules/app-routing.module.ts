import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from '../announcement/pages/announcement/announcement.component';
import {AnnouncementTeacherComponent} from "../announcement/pages/announcement-teacher/announcement-teacher.component";

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'announcements', component: AnnouncementComponent},
  { path: 'announcementsTeacher', component: AnnouncementTeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
