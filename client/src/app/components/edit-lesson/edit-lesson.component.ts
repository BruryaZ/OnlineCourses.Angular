import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LessonsService } from '../../services/lessons.service';
import { Lesson } from '../../models/lesson.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-lesson',
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {
  lessonForm: FormGroup;
  lessonId: number = 0;
  courseId: number = 0;

  lesson: Lesson = {
    id: 0,
    title: '',
    content: '',
    courseId: 0
  };

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.lessonForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.lessonId = +this.route.snapshot.paramMap.get('id')!;
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;
    this.lessonService.getLessonById(this.courseId, this.lessonId).subscribe(lesson => {
      this.lessonForm.patchValue(lesson);
    });
  }

  onSubmit(): void {
    if (this.lessonForm.valid) {
      const updateLesson: Lesson = {
        courseId: this.courseId = +this.route.snapshot.paramMap.get('courseId')!,
        id: this.lessonId = +this.route.snapshot.paramMap.get('id')!,
        title: this.lessonForm.get('title')?.value,
        content: this.lessonForm.get('content')?.value,
      }
      this.lessonService.updateLesson(this.courseId, this.lessonId, this.lesson).subscribe(() => {
        this.router.navigate(['/courses']); // חזרה לרשימת הקורסים
      });
    }
  }
}