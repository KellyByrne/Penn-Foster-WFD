import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListPageComponent } from './course-list-page/course-list-page.component';
import { CourseDescriptionPageComponent } from './course-description-page/course-description-page.component';

const routes: Routes = [
  {path: 'course-list/program/:coursenum', component: CourseListPageComponent},
  {path: 'course-description/program/:coursenum', component: CourseDescriptionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
