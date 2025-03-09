import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoursesComponent } from './components/courses/courses.component';
import { UsersComponent } from './components/users/users.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

export const routes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "courses", component: CoursesComponent },
    { path: "users", component: UsersComponent },
    { path: "lessons", component: LessonsComponent },
    { path: "add-course", component: AddCourseComponent },
];
