import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../dashboard/pages/dashboard/dashboard.component";
import { AnnouncementComponent } from '../announcement/pages/announcement/announcement.component';
import {AnnouncementTeacherComponent} from "../announcement/pages/announcement-teacher/announcement-teacher.component";
import { CompetencesComponent } from "../competences/pages/competences/competences.component";
import {CoursesComponent} from "../courses/pages/courses/courses.component";
import {TeachersComponent} from "../teachers/pages/teachers/teachers.component";
import { TopTeachersComponent } from '../top-teachers/pages/top-teachers/top-teachers.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'announcements', component: AnnouncementComponent},
  { path: 'announcementsTeacher', component: AnnouncementTeacherComponent},
  { path: 'competences', component: CompetencesComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'teachers', component: TeachersComponent},
  { path: 'top-teachers', component: TopTeachersComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
