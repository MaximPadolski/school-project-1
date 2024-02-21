import { Routes } from '@angular/router';
import { LessonComponent } from './components/lesson/lesson.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lesson/:id', component: LessonComponent },
];

