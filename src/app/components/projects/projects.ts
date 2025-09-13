import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and GitHub Pages. Features dark/light mode toggle, smooth animations, and responsive design.',
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=Portfolio+Website',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'GitHub Pages'],
      demoUrl: 'https://derrickmdillon.github.io',
      githubUrl: 'https://github.com/derrickmdillon/derrickmdillon.github.io'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern web technologies.',
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=E-Commerce+Platform',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/derrickmdillon/ecommerce-platform'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Task+Manager',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'WebSockets'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/derrickmdillon/task-manager'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, weather maps, and historical data visualization.',
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Weather+Dashboard',
      technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS Grid'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/derrickmdillon/weather-dashboard'
    },
    {
      title: 'Blog CMS',
      description: 'Content management system for blogs with markdown support, SEO optimization, and multi-author capabilities.',
      image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=Blog+CMS',
      technologies: ['Next.js', 'MongoDB', 'Markdown', 'Vercel'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/derrickmdillon/blog-cms'
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.',
      image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Fitness+App',
      technologies: ['React Native', 'SQLite', 'Redux', 'Push Notifications'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/derrickmdillon/fitness-app'
    }
  ];
}
