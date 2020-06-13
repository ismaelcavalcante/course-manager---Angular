import { NgModule } from '@angular/core';
import { CourseListComponent } from './coursesList.component';
import { CourseInfoComponent } from './course-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppPipeModule } from '../shared/component/pipe/app-pipe.module';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';

@NgModule({
  declarations: [CourseListComponent, CourseInfoComponent],
  imports: [
    CommonModule,
    AppPipeModule,
    FormsModule,
    StarModule,
    RouterModule.forChild([
      { path: 'courses', component: CourseListComponent },
      { path: 'courses/info/:id', component: CourseInfoComponent },
    ]),
  ],
})
export class CourseModule {}
