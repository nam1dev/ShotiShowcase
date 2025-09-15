# Shoti Web App

## Overview

Shoti is a short-form video platform web application inspired by TikTok and similar platforms. Built by Jaymar, a passionate newbie developer, the app displays vertical short videos from the Shoti API with an engaging, social media-style interface. The application focuses on video consumption with features like video metadata display, creator profiles, and a developer showcase section.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses **React 18** with **TypeScript** for type safety and modern component development. **Vite** serves as the build tool and development server, providing fast hot module replacement and optimized builds. The routing is handled by **Wouter**, a lightweight React router.

**Component Structure**: The UI follows a modular component architecture with reusable components built using **shadcn/ui** and **Radix UI** primitives. Key components include:
- `VideoPlayer` - Handles video playback with custom controls
- `VideoMetadata` - Displays creator information and video stats
- `ShotiFeed` - Main feed component that fetches and displays videos
- `DeveloperProfile` - Showcases the developer's information
- `ThemeSelector` - Allows users to switch between predefined themes

**State Management**: Uses **TanStack Query (React Query)** for server state management, API caching, and data fetching. This provides automatic background refetching, caching, and error handling for API calls.

### Backend Architecture
The backend is built with **Express.js** and follows a minimal API proxy pattern. The main purpose is to act as a CORS proxy for the external Shoti API, avoiding browser CORS restrictions when fetching video content.

**API Structure**: 
- Single endpoint `/api/shoti` that proxies requests to the external Shoti API
- Express middleware for logging, JSON parsing, and error handling
- Development-specific Vite integration for hot module replacement

### Data Storage Solutions
**Database**: Configured with **Drizzle ORM** and **PostgreSQL** (via Neon serverless), though currently using in-memory storage for user data. The schema defines a users table with basic authentication fields.

**Session Management**: Set up for PostgreSQL session storage using `connect-pg-simple`, preparing for future authentication features.

### Styling and Design System
**CSS Framework**: **Tailwind CSS** with custom design tokens that support both light and dark themes. The design system includes:
- Custom color palette inspired by TikTok's aesthetic
- Consistent spacing and typography scales
- Component variants for different UI states
- CSS custom properties for theme switching

**Typography**: Uses Google Fonts (Inter for body text, Poppins for headings) to create a modern, readable interface.

### External Dependencies

**UI Components**: 
- **shadcn/ui** - Pre-built accessible components
- **Radix UI** - Primitive components for complex UI patterns
- **Lucide React** - Icon library for consistent iconography

**Development Tools**:
- **TypeScript** - Type safety and better developer experience
- **ESBuild** - Fast bundling for production builds
- **PostCSS** - CSS processing with Tailwind CSS

**Utilities**:
- **clsx** and **tailwind-merge** - Conditional class name utilities
- **class-variance-authority** - Type-safe component variants
- **date-fns** - Date manipulation and formatting

**External API**: 
- **Shoti API** (`https://betadash-shoti-yazky.vercel.app/shotizxx`) - Provides short video content including video URLs, metadata, creator information, and thumbnails

**Development Environment**:
- **Replit** integration with custom plugins for development modal and cartographer
- Environment-specific configuration for both development and production