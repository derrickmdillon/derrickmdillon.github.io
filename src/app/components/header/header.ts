import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  private themeService = inject(ThemeService);

  get isDarkMode() {
    return this.themeService.isDarkMode;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
