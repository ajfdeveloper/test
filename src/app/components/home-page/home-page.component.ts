import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { CommonModule } from '@angular/common';
import { ExpertsComponent } from "../experts/experts.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AnalyticsComponent, CommonModule, ExpertsComponent, ExpertsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  hoveredIndex: number | null = null; // Track the hovered index

  profiles = [
    { name: 'Dr. R. Venkateswaran ', position: 'Chairman', image: 'assets/experts/Picture1.jpg' },
    { name: 'Dr. Rahul Kulkarni', position: 'Vice Chairman', image: 'assets/experts/Picture2.jpg' },
    { name: 'Shri. Adesh Gokhale ', position: 'Director', image: 'assets/experts/Picture3.jpg' }
  ];
  openMenuId: string | null = null;

  constructor(private el: ElementRef) {}

  toggleMenu(event: Event, menuId: string) {
    event.stopPropagation(); // Prevent closing when clicking inside a menu

    if (this.openMenuId === menuId) {
      this.openMenuId = null; // Close if already open
    } else {
      this.openMenuId = menuId; // Open new menu
    }
  }

}
