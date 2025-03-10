import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/course.model';
import { LessonsService } from '../../services/lessons.service';
import { FullCourse } from '../../models/fullCourse.model';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, RouterModule, MatButtonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
lesson: any;
  constructor(
    private courseService: CoursesService,
    private lessonService: LessonsService
  ) {}
  
  courses: Course[] = [];
  fullCourses: FullCourse[] = [];

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;

      this.courses.forEach((course) => {
        this.lessonService.getLessons(course.id).subscribe((lessons) => {
          const fullCourse: FullCourse = {
            title: course.title,
            description: course.description,
            teacherId: course.teacherId,
            lessons: lessons,
            id: course.id
          };
          this.fullCourses.push(fullCourse);
        });
      });
    });
  }
}