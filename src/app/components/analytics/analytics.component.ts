import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {

  slides = [
    {
      image: 'assets/slides/post-slide-1.JPG',
      title: 'The Best Homemade Masks for Face (keep the Pimples Away)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.',
      link: 'single-post.html'
    },
    {
      image: 'assets/slides/a235.jpg',
      title: '17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.',
      link: 'single-post.html'
    },
    {
      image: 'assets/slides/post-slide-3.jpg',
      title: '13 Amazing Poems from Shel Silverstein with Valuable Life Lessons',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.',
      link: 'single-post.html'
    },
    {
      image: 'assets/slides/A237.jpg',
      title: '9 Half-up/half-down Hairstyles for Long and Medium Hair',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.',
      link: 'single-post.html'
    }
  ];
}
