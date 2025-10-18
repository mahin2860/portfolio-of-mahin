# Mahin's Portfolio

## 🛠️ Built With

This portfolio is crafted with modern web technologies:

- **Next.js 15** - React framework for production
- **TypeScript** - Typed JavaScript for better code quality
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **Anime.js** - Lightweight JavaScript animation library
- **GSAP** - Robust JavaScript animation library
- **Shadcn UI** - Re-usable components built with Radix UI and Tailwind CSS
- **Lucide React** - Beautiful & consistent icon toolkit

## 🎨 Key Features

### Animation Systems
- **Scroll-driven animations** powered by Anime.js `onScroll`
- **Micro-interactions** with Framer Motion
- **Complex sequences** with GSAP
- **Staggered entrance effects** for dynamic content reveals

### UI Components
- **Orbital skill display** with interactive hover effects
- **Spotlight cards** with dynamic lighting effects
- **Magic bento grids** for content organization
- **Fluid glass morphisms** for modern UI aesthetics
- **Doodle elements** for playful design accents

### Technical Implementation
- **Responsive design** for all device sizes
- **Performance optimized** with code splitting and lazy loading
- **Accessibility focused** with semantic HTML and ARIA attributes
- **Modern build pipeline** with Next.js App Router
- **Image privacy protection** to prevent unauthorized use

## 🔒 Privacy Protection

This portfolio implements multiple layers of privacy protection for images:

1. **CSS Protection**
   - Disables right-click context menu on images
   - Prevents image dragging and selection
   - Adds overlay elements to block access

2. **JavaScript Protection**
   - Blocks right-click events on images
   - Prevents drag and drop of image assets
   - Disables image selection

3. **Server-side Protection**
   - Middleware to prevent image hotlinking
   - robots.txt to block search engine indexing of sensitive images
   - HTTP headers to prevent content sniffing

4. **Component-level Protection**
   - Custom ProtectedImage component with built-in security
   - Loading state management to prevent flash of unstyled content

## 📁 Project Structure

```
app/                 # Next.js app router pages
components/          # React components
  ui/                # Reusable UI components
  sections/          # Page section components
hooks/               # Custom React hooks
lib/                 # Utility functions
public/              # Static assets
styles/              # Global CSS files
```

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

*Crafted with passion by Erfan Noor Mahin*