import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/course.model';
import { LessonsService } from '../../services/lessons.service';
import { Lesson } from '../../models/lesson.model';
import { FullCourse } from '../../models/fullCourse.model';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{ 
  constructor(private courseService:CoursesService,
    private lessonService: LessonsService
  ){}
  courses:Course[]=[];
  fullCourses:FullCourse[]=[];

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;  

      this.courses.forEach(course => {
        this.lessonService.getLessons(course.id).subscribe((lessons) => {
          const fullCourse = new FullCourse(course.title, course.description, course.teacherId, lessons);
          this.fullCourses.push(fullCourse);
        });
      });
    });
  }
}
