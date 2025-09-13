import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { AboutComponent } from './components/about/about';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
