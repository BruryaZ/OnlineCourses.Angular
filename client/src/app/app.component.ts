import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; // הוסף שורה זו
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from "./components/dashboard/dashboard.component"; // הוסף גם את מודול הכפתורים
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatToolbarModule, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
}