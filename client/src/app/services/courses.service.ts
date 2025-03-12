import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    let token: string | null = null;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.get<Course[]>('http://localhost:3000/api/courses', { headers });
    }

    throw new Error("No token found");
  }

  getCourseById(id: number): Observable<Course> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.get<Course>(`http://localhost:3000/api/courses/${id}`, { headers });
    }

    throw new Error("Window is undefined");
  }

  addCourse(course: Course): Observable<any> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.post<Course>(
        `http://localhost:3000/api/courses`,
        course, { headers }
      );
    }

    throw new Error("Window is undefined");
  }

  updateCourse(id: number, course: Course): Observable<any> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.put<Course>(
        `http://localhost:3000/api/courses/${id}`,
        course, { headers }
      );
    }

    throw new Error("Window is undefined");
  }

  deleteCourse(id: number): Observable<any> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.delete<Course>(
        `http://localhost:3000/api/courses/${id}`, { headers }
      );
    }

    throw new Error("Window is undefined");
  }
}