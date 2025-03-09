import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  user: any = null;
  courseForm: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CoursesService) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (localStorage.getItem('user') !== null) {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      }
    }
    
    if (this.courseForm.valid) {
      const newCourse: Course = { 
        id: 0, 
        ...this.courseForm.value, 
        teacherId: this.user != null ? this.user.id : 12 
      };
  
      // נניח ש-addCourse מחזיר Observable
      this.courseService.addCourse(newCourse).subscribe({
        next: (res) => {
          console.log('Course added:', res);
          // טיפול בהצלחה
        },
        error: (error) => {
          console.log('Error adding course:', error);
          // טיפול בשגיאה
        }
      });
    }
  }
}