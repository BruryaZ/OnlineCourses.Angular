import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonModule, DatePipe, UserDetailsComponent, MatCardModule, MatSidenavModule, MatToolbarModule, MatListModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentDate: Date = new Date();
  selectedComponent2: string = '';

  constructor(private router: Router) {}

  navigateToComponent(component: string) {
    this.selectedComponent2 = component;
    console.log(this.selectedComponent2); // הדפסת הערך
    this.router.navigate([component]);
  }
}