import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoursesComponent } from './components/courses/courses.component';
import { UsersComponent } from './components/users/users.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';

export const routes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "users", component: UsersComponent },
    { path: "lessons", component: LessonsComponent },
    { path: "add-course", component: AddCourseComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/edit/:id', component: EditCourseComponent },
    { path: 'courses/delete/:id', component:  DeleteCourseComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
