import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly darkMode = signal(false);

  constructor() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    this.darkMode.set(savedTheme === 'dark' || (!savedTheme && prefersDark));

    // Apply theme changes to document
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.darkMode() ? 'dark' : 'light');
      localStorage.setItem('theme', this.darkMode() ? 'dark' : 'light');
    });
  }

  get isDarkMode() {
    return this.darkMode.asReadonly();
  }

  toggleTheme() {
    this.darkMode.update(current => !current);
  }
}
