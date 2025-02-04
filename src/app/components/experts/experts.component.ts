import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experts.component.html',
  styleUrl: './experts.component.css'
})
export class ExpertsComponent {
  testimonials = [
    { name: 'Saul Goodman', position: 'CEO & Founder', text: 'Proin iaculis purus...', image: 'assets/testimonials/testimonials-1.jpg' },
    { name: 'Sara Wilsson', position: 'Designer', text: 'Export tempor illum...', image: 'assets/testimonials/testimonials-2.jpg' },
    { name: 'Jena Karlis', position: 'Store Owner', text: 'Enim nisi quem export...', image: 'assets/testimonials/testimonials-3.jpg' },
    { name: 'Matt Brandon', position: 'Freelancer', text: 'Fugiat enim eram...', image: 'assets/testimonials/testimonials-4.jpg' },
    { name: 'John Larson', position: 'Entrepreneur', text: 'Quis quorum aliqua...', image: 'assets/testimonials/testimonials-5.jpg' }
  ];

  // Duplicate the array to create an infinite scrolling effect
  // get duplicatedTestimonials() {
  //   return [...this.testimonials];
  // }
}
