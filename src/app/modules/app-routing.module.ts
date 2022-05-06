import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeachersComponent} from "../teachers/pages/teachers/teachers.component";

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'teachers', component: TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
