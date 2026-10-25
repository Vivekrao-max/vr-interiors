# VR Interiors Website

A modern, performant website for VR Interiors — interior design services and premium materials supplier based in Vizag, Andhra Pradesh.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build/) — Static site generation with island architecture
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS with design tokens
- **Deployment**: Netlify / Vercel (recommended)
- **Forms**: Formspree / Netlify Forms
- **Analytics**: Plausible / Umami (privacy-friendly)

## Design System

Based on the reference design from businessbench.in with VR Interiors branding:

| Token | Value |
|-------|-------|
| **Primary** | Teal `#007B83` (CTAs, links, accents) |
| **Secondary** | Warm Orange `#E86C00` (highlight CTAs, hover states) |
| **Background** | Off-white `#FAFAFA` |
| **Text** | Dark charcoal `#212121` |
| **Border** | Light gray `#E0E0E0` |
| **Font** | Inter (system stack fallback) |
| **Spacing** | 8px base unit |
| **Radius** | 4px buttons, 8px cards |
| **Shadow** | Subtle elevation |

## Project Structure

```
vr-interiors/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Hero.astro
│   │   └── Section.astro
│   ├── layouts/
│   │   └── Layout.astro    # Base HTML layout
│   ├── pages/              # Routes (file-based routing)
│   │   ├── index.astro     # Home page
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── contact.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css      # Tailwind v4 import + design tokens
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

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

The dev server will start at `http://localhost:4321`

## Customization

### Colors & Design Tokens

Edit `src/styles/global.css` — the `@theme` block contains all design tokens:

```css
@theme {
  --color-primary-600: #007B83;    /* Main brand color */
  --color-secondary-600: #E86C00;  /* Accent color */
  --font-family-sans: 'Inter', ...;
  /* ... more tokens */
}
```

### Content Updates

All page content is in the `.astro` files under `src/pages/`. For blog posts, the `[slug].astro` file contains sample data — replace with Astro Content Collections or a headless CMS for production.

### Images

Place images in `public/` and reference them with absolute paths:
- `/images/hero.jpg`
- `/projects/project-1.jpg`
- `/team/vivek-rao.jpg`

### Forms

Update the `action` attribute on forms to point to your Formspree/Netlify Forms endpoint:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### SEO

Each page accepts frontmatter props for SEO:
```astro
---
import Layout from '@/layouts/Layout.astro';
---
<Layout
  title="Page Title"
  description="Meta description for search engines"
  canonicalURL="/page-path"
  ogImage="/og-image.jpg"
>
  <!-- page content -->
</Layout>
```

## Deployment

### Netlify (Recommended)

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables if needed
5. Enable form detection in Netlify dashboard

### Vercel

1. Import project from Git
2. Framework preset: Astro
3. Deploy

## Performance Features

- ✅ Static HTML generation (no JS by default)
- ✅ Optimized images (add `@astrojs/image` for automatic optimization)
- ✅ Minified CSS/JS
- ✅ Preconnect hints for fonts
- ✅ Semantic HTML5
- ✅ Accessible components (ARIA labels, focus states)
- ✅ Responsive design (mobile-first)

## Ongoing Partnership Notes

This foundation is built for easy iteration:

1. **New pages** — Add `.astro` files to `src/pages/`
2. **New components** — Create in `src/components/`
3. **Blog posts** — Replace sample data in `[slug].astro` with Content Collections
4. **Design changes** — Modify tokens in `global.css`
5. **Analytics** — Add Plausible/Umami script to `Layout.astro`

## License

Private — VR Interiors proprietary codebase.