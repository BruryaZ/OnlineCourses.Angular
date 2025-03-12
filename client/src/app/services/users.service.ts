import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.get<User[]>('http://localhost:3000/api/users', { headers });
    }
    return new Observable<User[]>(); // Return an empty observable if window is undefined
  }

  getUserById(id: number): Observable<User> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.get<User>(`http://localhost:3000/api/users/${id}`, { headers, });
    }
    return new Observable<User>(); // Return an empty observable if window is undefined
  }

  addUser(user: User): Observable<any> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.post<User>(`http://localhost:3000/api/users`, user, {
        headers,
      });
    }
    return new Observable<User[]>(); // Return an empty observable if window is undefined
  }

  updateUser(id: number, user: User): Observable<any> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.put<User>(`http://localhost:3000/api/users/${id}`, user, {
        headers,
      });
    }
    return new Observable<User[]>(); // Return an empty observable if window is undefined
  }

  deleteUser(id: number): Observable<any> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error("No token found");
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.delete<User>(`http://localhost:3000/api/users/${id}`, {
        headers,
      });
    }
    return new Observable<User[]>(); // Return an empty observable if window is undefined
  }
}