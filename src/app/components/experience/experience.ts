import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  type: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      type: 'Full-time',
      startDate: 'Jan 2022',
      endDate: 'Present',
      duration: '2+ years',
      description: 'Lead development of enterprise web applications and mentor junior developers. Responsible for architecture decisions and implementing best practices across the development team.',
      achievements: [
        'Increased application performance by 40% through optimization techniques',
        'Led team of 5 developers in delivering critical features on time',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 3 junior developers, helping them advance their careers'
      ],
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions LLC',
      type: 'Full-time',
      startDate: 'Mar 2020',
      endDate: 'Dec 2021',
      duration: '1 year 10 months',
      description: 'Developed and maintained multiple client-facing web applications using modern JavaScript frameworks. Collaborated with design and product teams to deliver high-quality user experiences.',
      achievements: [
        'Built responsive e-commerce platform serving 10k+ daily users',
        'Reduced page load times by 35% through code splitting and lazy loading',
        'Implemented automated testing increasing code coverage to 85%',
        'Successfully delivered 12 projects on time and within budget'
      ],
      technologies: ['React', 'Vue.js', 'Express.js', 'MongoDB', 'Firebase', 'JavaScript']
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Studio',
      type: 'Full-time',
      startDate: 'Jun 2018',
      endDate: 'Feb 2020',
      duration: '1 year 9 months',
      description: 'Specialized in creating beautiful, responsive user interfaces for various client projects. Worked closely with designers to bring mockups to life and ensure pixel-perfect implementations.',
      achievements: [
        'Converted 15+ designs to responsive, interactive web applications',
        'Improved accessibility scores by implementing WCAG guidelines',
        'Collaborated with UX team to enhance user engagement by 25%',
        'Established coding standards and component library for team use'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Sass']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      type: 'Full-time',
      startDate: 'Aug 2017',
      endDate: 'May 2018',
      duration: '10 months',
      description: 'Entry-level position focused on learning modern web development practices and contributing to various startup projects. Gained experience in both frontend and backend technologies.',
      achievements: [
        'Completed intensive training program in modern web technologies',
        'Built first full-stack application using MEAN stack',
        'Contributed to 5 different client projects',
        'Received "Outstanding New Developer" award'
      ],
      technologies: ['JavaScript', 'Node.js', 'Angular', 'MongoDB', 'Git', 'Agile']
    }
  ];
}
