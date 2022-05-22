import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {AppRoutingModule} from "./modules/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {DashboardComponent} from "./dashboard/pages/dashboard/dashboard.component";
import { AnnouncementComponent } from './announcement/pages/announcement/announcement.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import { CompetencesComponent } from "./competences/pages/competences/competences.component";
import { AnnouncementTeacherComponent } from './announcement/pages/announcement-teacher/announcement-teacher.component';
import { CoursesComponent } from './courses/pages/courses/courses.component';
import {TeachersComponent} from "./teachers/pages/teachers/teachers.component";
import { AppComponent } from './app.component';
import { TopTeachersComponent } from './top-teachers/pages/top-teachers/top-teachers.component';
import { TeacherDetailComponent } from './teachers/pages/teacher-detail/teacher-detail.component';
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AnnouncementComponent,
    AnnouncementTeacherComponent,
    CompetencesComponent,
    CoursesComponent,
    TeachersComponent,
    TopTeachersComponent,
    TeacherDetailComponent
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
        MatInputModule,
        MatChipsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
