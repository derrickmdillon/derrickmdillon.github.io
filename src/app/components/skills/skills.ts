import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 90, color: '#dd1b16' },
        { name: 'React', level: 85, color: '#61dafb' },
        { name: 'TypeScript', level: 88, color: '#3178c6' },
        { name: 'JavaScript', level: 92, color: '#f7df1e' },
        { name: 'HTML/CSS', level: 95, color: '#e34f26' },
        { name: 'SCSS/Sass', level: 87, color: '#cc6699' }
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Python', level: 80, color: '#3776ab' },
        { name: 'Java', level: 75, color: '#f89820' },
        { name: 'Express.js', level: 82, color: '#000000' },
        { name: 'NestJS', level: 78, color: '#e0234e' },
        { name: 'RESTful APIs', level: 90, color: '#25d366' }
      ]
    },
    {
      name: 'Database & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 82, color: '#336791' },
        { name: 'MongoDB', level: 80, color: '#47a248' },
        { name: 'Firebase', level: 85, color: '#ffca28' },
        { name: 'AWS', level: 75, color: '#ff9900' },
        { name: 'Docker', level: 78, color: '#2496ed' },
        { name: 'Git/GitHub', level: 92, color: '#f05032' }
      ]
    },
    {
      name: 'Tools & Frameworks',
      skills: [
        { name: 'Vue.js', level: 80, color: '#4fc08d' },
        { name: 'Next.js', level: 82, color: '#000000' },
        { name: 'Tailwind CSS', level: 88, color: '#06b6d4' },
        { name: 'Webpack', level: 75, color: '#8dd6f9' },
        { name: 'Jest/Testing', level: 80, color: '#c21325' },
        { name: 'GraphQL', level: 72, color: '#e10098' }
      ]
    }
  ];
}
