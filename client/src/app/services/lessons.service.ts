import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) { }

  getLessons(courseId: number): Observable<Lesson[]> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.get<Lesson[]>(`http://localhost:3000/api/courses/${courseId}/lessons`, { headers });
    }
    return new Observable<Lesson[]>(); // Return an empty observable if window is undefined
  }

  getLessonById(courseId: number, id: number): Observable<Lesson> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.get<Lesson>(`http://localhost:3000/api/courses/${courseId}/lessons/${id}`, { headers });
    }
    return new Observable<Lesson>(); // Return an empty observable if window is undefined
  }

  addLesson(courseId: number, lesson: Lesson): Observable<any> {
    if (typeof window !== 'undefined') {

      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.post<Lesson>(
        `http://localhost:3000/api/courses/${courseId}/lessons`,
        lesson, { headers }
      );
    }
    return new Observable<any>(); // Return an empty observable if window is undefined
  }

  updateLesson(courseId: number, id: number, lesson: Lesson): Observable<any> {
    if (typeof window !== 'undefined') {

      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.put<Lesson>(
        `http://localhost:3000/api/courses/${courseId}/lessons/${id}`,
        lesson, { headers }
      );
    }
    return new Observable<any>(); // Return an empty observable if window is undefined
  }

  deleteLesson(courseId: number, id: number): Observable<any> {
    if (typeof window !== 'undefined') {

      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.delete<Lesson>(
        `http://localhost:3000/api/courses/${courseId}/lessons/${id}`, { headers }
      );
    }
    return new Observable<any>(); // Return an empty observable if window is undefined
  }
}