# Smart Portfolio - AI Engineer

A cyberpunk-themed portfolio website for an AI Engineer specializing in LLMs, RAG, and Model Deployment.

## Features

- **Terminal Hero Section**: Simulated terminal with LLM-style streaming text generation
- **Experience Timeline**: Vertical timeline showcasing professional journey from IIT Goa to Otsuka Shokai
- **Tech Stack Grid**: Categorized skills display with hover effects
- **Projects Showcase**: Interactive project cards with technology tags
- **Cyberpunk Aesthetic**: Dark mode with cyan/purple accents and glowing effects

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── TerminalHero.tsx      # Hero section with streaming effect
│   ├── ExperienceTimeline.tsx # Professional experience timeline
│   ├── TechStackGrid.tsx      # Skills categorized by domain
│   ├── Projects.tsx           # Project showcase
│   └── Footer.tsx             # Footer with status indicators
├── data/
│   └── portfolioData.ts       # Centralized data source
├── App.tsx                     # Main application component
└── index.css                   # Global styles and Tailwind config
```

## Customization

### Update Portfolio Data

Edit `src/data/portfolioData.ts` to update:
- Personal information
- Skills and technologies
- Work experience
- Projects
- Education

### Customize Theme Colors

Modify `tailwind.config.js` to change the cyberpunk color scheme:

```js
colors: {
  cyber: {
    bg: '#0a0e17',           // Background
    surface: '#131720',       // Card surfaces
    border: '#1e2533',        // Border color
    accent: '#00f0ff',        // Primary accent (cyan)
    purple: '#a855f7',        // Secondary accent
    green: '#00ff88',         // Terminal green
  }
}
```

### Animation Speed

Adjust animation timing in components:
- Terminal typing speed: `TerminalHero.tsx` line 20
- Scroll animations: Modify `transition` props in Framer Motion components

## Performance

- Lazy loading for images
- Optimized animations with Framer Motion
- Minimal bundle size with tree-shaking
- Fast page loads with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Mansi Rawat**
- Email: officialmansi12@gmail.com
- GitHub: [github.com/manc1811](https://github.com/manc1811)
- LinkedIn: [linkedin.com/in/mansi-rawat](https://linkedin.com/in/mansi-rawat)

---

Built with React, Tailwind CSS, and Framer Motion
