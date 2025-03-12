import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { HomeComponent } from './components/home/home.component';
import { EditLessonComponent } from './components/edit-lesson/edit-lesson.component';
import { DeleteLessonComponent } from './components/delete-lesson/delete-lesson.component';
import { AddLessonComponent } from './components/add-lesson/add-lesson.component';

export const routes: Routes = [
    { path: 'courses/edit/:id', component: EditCourseComponent},//
    { path: 'lessons/:courseId/delete/:id', component: DeleteLessonComponent },
    { path: 'lessons/:courseId/edit/:id', component: EditLessonComponent },
    { path: 'courses/delete/:id', component: DeleteCourseComponent},//
    { path: 'lessons/:courseId/add', component: AddLessonComponent},
    { path: "register", component: RegisterComponent },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "add-course", component: AddCourseComponent },
    { path: 'courses', component: CoursesComponent },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: HomeComponent },

];
