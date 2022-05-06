import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopTeachersComponent } from './top-teachers/pages/top-teachers.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'top-teachers', component: TopTeachersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
