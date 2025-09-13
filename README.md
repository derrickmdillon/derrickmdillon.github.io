# Derrick M. Dillon - Portfolio Website

A modern, responsive portfolio website built with Angular and deployed on GitHub Pages.

## 🚀 Live Demo

Visit the live portfolio at: [derrickmdillon.github.io](https://derrickmdillon.github.io)

## ✨ Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark/Light Mode Toggle** - User preference with local storage persistence
- **Interactive Sections:**
  - About Me with professional introduction
  - Featured Projects with live demo links
  - Skills & Technologies with progress visualizations
  - Experience Timeline with detailed work history
  - Contact Form with validation
  - Resume Download

## 🛠️ Tech Stack

- **Framework:** Angular 20+
- **Language:** TypeScript
- **Styling:** SCSS/CSS3
- **Deployment:** GitHub Pages
- **Build Tool:** Angular CLI
- **Features:** 
  - Angular Signals for state management
  - Reactive Forms for contact functionality
  - CSS Variables for theming
  - Responsive Grid Layouts

## 🎨 Design Highlights

- Modern, clean design with smooth animations
- Professional color scheme with purple accent (#6366f1)
- Glassmorphism effects for modern UI elements
- Smooth scrolling navigation
- Interactive hover effects
- Accessibility-focused implementation

## 📱 Sections

### Header
- Fixed navigation with smooth scroll links
- Theme toggle button (dark/light mode)
- Resume download button

### About Me
- Professional introduction
- Key statistics and achievements
- Photo placeholder for personal branding

### Featured Projects
- 6 showcase projects with descriptions
- Technology tags for each project
- Live demo and GitHub repository links
- Responsive card layout

### Skills & Technologies
- Categorized skill sets (Frontend, Backend, Database & Cloud, Tools)
- Visual progress bars showing proficiency levels
- Color-coded skill categories
- Additional learning goals section

### Experience Timeline
- Chronological work history
- Detailed job descriptions and achievements
- Technology stacks for each role
- Visual timeline with connecting elements

### Contact
- Professional contact information
- Working contact form with validation
- Social media links
- Form submission feedback

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/derrickmdillon/derrickmdillon.github.io.git
   cd derrickmdillon.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

Build for GitHub Pages:
```bash
npm run build:gh-pages
```

The built files will be output to the `docs/` directory, which is configured for GitHub Pages deployment.

## 📦 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation and theme toggle
│   │   ├── about/           # About me section
│   │   ├── projects/        # Featured projects
│   │   ├── skills/          # Skills and technologies
│   │   ├── experience/      # Work experience timeline
│   │   └── contact/         # Contact form and info
│   ├── services/
│   │   └── theme.ts         # Theme management service
│   ├── app.ts               # Main app component
│   └── app.html             # App template
├── styles.scss              # Global styles and theme variables
└── index.html              # Main HTML file
```

## 🎨 Customization

### Updating Content
- **Personal Info:** Update content in respective component files
- **Projects:** Modify the projects array in `projects.ts`
- **Skills:** Update skill categories and levels in `skills.ts`
- **Experience:** Edit work history in `experience.ts`
- **Contact:** Update contact methods in `contact.html`

### Styling
- **Colors:** Modify CSS variables in `styles.scss`
- **Typography:** Update font families and sizes in global styles
- **Animations:** Customize transitions and hover effects in component SCSS files

### Adding Sections
1. Generate new component: `ng generate component components/new-section`
2. Add to main app template: `app.html`
3. Import in `app.ts`
4. Style in component SCSS file

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Derrick M. Dillon**
- Portfolio: [derrickmdillon.github.io](https://derrickmdillon.github.io)
- GitHub: [@derrickmdillon](https://github.com/derrickmdillon)
- Email: derrick@example.com

---

⭐ If you like this portfolio template, please give it a star on GitHub!
