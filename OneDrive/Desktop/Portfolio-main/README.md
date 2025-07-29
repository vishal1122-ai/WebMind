# Venkata Vishal Sitamraju - Portfolio Website

A modern, interactive portfolio website showcasing frontend design and development expertise. Built with React, Three.js, and advanced animations to create an immersive user experience.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630)

## 🚀 Features

- **Interactive 3D Backgrounds**: Four selectable Three.js animations (Neural Networks, Liquid Waves, Digital Rain, Geometric Patterns)
- **Smooth Animations**: GSAP-powered scroll-triggered animations and transitions
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean design with glass morphism effects and custom cursor
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Three.js** for 3D graphics and animations
- **GSAP** with ScrollTrigger for animations
- **Wouter** for client-side routing
- **TanStack Query** for state management
- **shadcn/ui** component library

### Backend
- **Node.js** with Express.js
- **TypeScript** with ESM modules
- **Drizzle ORM** with PostgreSQL
- **Zod** for validation

### Development Tools
- **Vite** for build tooling and development server
- **ESLint** for code quality
- **PostCSS** with Autoprefixer

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishal1122-ai/Portfolio2.git
   cd Portfolio2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables in the `.env` file.

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deploy to Replit
The project is configured for Replit deployment with the included configuration files.

### Deploy to Vercel/Netlify
The built files in `dist/` can be deployed to any static hosting service.

## 📁 Project Structure

```
Portfolio2/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/           # Utility libraries
│   │   ├── pages/         # Page components
│   │   └── index.css      # Global styles
│   └── index.html         # HTML template
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage layer
│   └── vite.ts           # Vite development setup
├── shared/               # Shared types and schemas
│   └── schema.ts        # Database schemas
├── public/              # Static assets
└── dist/               # Production build output
```

## 🎨 Customization

### Changing Theme Colors
Update the CSS custom properties in `client/src/index.css`:

```css
:root {
  --electric: hsl(194, 100%, 50%);  /* Primary accent color */
  --neon: hsl(258, 84%, 66%);       /* Secondary accent color */
}
```

### Adding New Portfolio Projects
Edit the projects array in `client/src/components/PortfolioSection.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    // ... other properties
  }
];
```

### Modifying 3D Animations
The Three.js animations are managed in `client/src/lib/three-animations.ts`. You can:
- Add new animation types
- Modify existing animations
- Adjust performance settings

## 🔧 Configuration

### Environment Variables
Create a `.env` file with:

```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=development
```

### Vite Configuration
The project uses a custom Vite setup in `vite.config.ts` with:
- Path aliases for clean imports
- React plugin for JSX transformation
- Development server proxy configuration

## 📱 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** for 3D graphics capabilities
- **GSAP** for smooth animations
- **shadcn/ui** for beautiful UI components
- **Tailwind CSS** for utility-first styling
- **Unsplash** for high-quality placeholder images

## 📞 Contact

**Venkata Vishal Sitamraju**
- Email: vishal@example.com
- LinkedIn: [linkedin.com/in/vishal-sitamraju](https://linkedin.com/in/vishal-sitamraju)
- GitHub: [github.com/vishal1122-ai](https://github.com/vishal1122-ai)

---

**Built with ❤️ by Venkata Vishal Sitamraju**