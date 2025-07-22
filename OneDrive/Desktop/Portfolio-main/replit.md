# Venkata Vishal Sitamraju - Portfolio Website

## Overview

This is a modern, interactive portfolio website for Venkata Vishal Sitamraju, a Frontend Designer & Developer. The application showcases expertise in React, Three.js, and modern web technologies through an immersive, animated user experience. The portfolio features interactive 3D backgrounds, smooth animations, and a comprehensive contact system.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: GSAP with ScrollTrigger for scroll-based animations
- **3D Graphics**: Three.js for interactive background animations
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ESM modules
- **API Structure**: RESTful endpoints for contact form submission
- **Development Mode**: Vite middleware integration for HMR

### Database & Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for type-safe database operations
- **Tables**:
  - `contacts`: Stores contact form submissions (id, name, email, message)
  - `users`: User authentication table (id, username, password)
- **Validation**: Zod schemas for runtime type validation

## Key Components

### Core Application Structure
- **Single Page Application**: All content rendered on one scrollable page
- **Section-based Layout**: Hero, About, Portfolio, Services, Testimonials, Contact, Footer
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Theme Support**: Dark/light mode with persistent user preference

### Interactive Features
- **Custom Cursor**: Animated cursor with hover effects
- **Scroll Progress Bar**: Visual indicator of page scroll position
- **Floating Navigation**: Sticky navigation with smooth scrolling
- **3D Background Animations**: Four different animation types (neural, liquid, matrix, geometric)
- **Loading Screen**: Initial loading animation for enhanced UX
- **Chat Modal**: Interactive contact widget

### Animation System
- **GSAP Integration**: Comprehensive scroll-triggered animations
- **Text Reveals**: Animated text appearance on scroll
- **Stagger Animations**: Sequential element animations
- **Three.js Manager**: Centralized 3D animation controller

## Data Flow

### Client-Side Flow
1. **Initialization**: Loading screen → Theme detection → Animation setup
2. **User Interaction**: Scroll events trigger GSAP animations and 3D scene updates
3. **Contact Submission**: Form validation → API request → Toast notification
4. **Theme Management**: Context-based theme switching with localStorage persistence

### Server-Side Flow
1. **Development**: Vite middleware handles static assets and HMR
2. **API Requests**: Express routes handle contact form submissions
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Production**: Compiled Express server serves static assets

## External Dependencies

### Frontend Libraries
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Animations**: GSAP (loaded via CDN) with ScrollTrigger plugin
- **3D Graphics**: Three.js (loaded via CDN)
- **Typography**: Google Fonts (Inter, JetBrains Mono)
- **Icons**: Font Awesome (loaded via CDN)

### Backend Dependencies
- **Database**: PostgreSQL with Neon serverless adapter
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint configuration through Vite
- **Build System**: Vite with React plugin and Replit integrations

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` runs TSX server with Vite middleware
- **Hot Module Replacement**: Vite provides instant updates for frontend changes
- **Database**: PostgreSQL module enabled in Replit environment
- **Port Configuration**: Server runs on port 5000 with Vite proxy

### Production Build
- **Frontend Build**: `vite build` compiles React app to `dist/public`
- **Backend Build**: `esbuild` bundles Express server to `dist/index.js`
- **Deployment Target**: Replit Autoscale with optimized bundle sizes
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Run Configuration**: Development and production npm scripts
- **Build Process**: Automated frontend and backend compilation
- **File Structure**: Mono-repo with client, server, and shared directories

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Portfolio optimization completed - smooth scrolling, clean testimonials, performance improvements
- June 26, 2025. Repository structure and documentation prepared - comprehensive README, security-focused .gitignore, contribution guidelines
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```