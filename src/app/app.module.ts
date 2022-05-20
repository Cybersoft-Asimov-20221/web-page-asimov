import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementTeacherComponent } from './announcement/pages/announcement-teacher/announcement-teacher.component';
import { AnnouncementComponent } from './announcement/pages/announcement/announcement.component';
import { AppComponent } from './app.component';
import { CompetencesComponent } from "./competences/pages/competences/competences.component";
import { CourseComponent } from "./course/pages/course/course.component";
import { CoursesComponent } from './courses/pages/courses/courses.component';
import { DashboardComponent } from "./dashboard/pages/dashboard/dashboard.component";
import { AppRoutingModule } from "./modules/app-routing.module";
import { TeachersComponent } from "./teachers/pages/teachers/teachers.component";
import { TopTeachersComponent } from './top-teachers/pages/top-teachers/top-teachers.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AnnouncementComponent,
    AnnouncementTeacherComponent,
    CompetencesComponent,
    CoursesComponent,
    CourseComponent,
    TeachersComponent,
    TopTeachersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
