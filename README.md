# Vitora HMIS - Marketing Website

Official marketing and landing website for Vitora HMIS, Kenya's offline-first hospital management system.

## 🌟 Overview

This is the public-facing marketing website for Vitora HMIS, showcasing the product's features, integrations, and value proposition to healthcare providers across Kenya.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.12 (App Router)
- **Language**: TypeScript 5.7.2
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Lucide React icons
- **Theme**: next-themes for dark mode support
- **Deployment**: Vercel (optimized for static generation)

## 🎨 Design System

### Brand Colors

- **Deep Burgundy** (`#3D000F`): Primary brand, headings, CTA buttons
- **Teal** (`#1A4D5C`): Secondary, links, feature icons, accents
- **Warm Gold** (`#D4A574`): Accent highlights, badges, decorative elements

### Features

- ✅ Dark mode with smooth transitions
- ✅ Fully responsive (mobile-first design)
- ✅ Professional healthcare aesthetic
- ✅ Burgundy-to-teal gradient hero sections
- ✅ Card-based layouts with subtle shadows

## 📄 Pages

1. **Home** (`/`) - Hero, features overview, stats, CTA
2. **Features** (`/features`) - 8 HMIS modules detailed
3. **About** (`/about`) - Mission, values, company story
4. **Contact** (`/contact`) - Contact form and information
5. **Demo** (`/demo`) - Demo request with expectations
6. **Integrations** (`/integrations`) - SHA, KHIS, M-Pesa
7. **AI** (`/ai`) - TibaBot AI capabilities

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically reload when you make changes to the code.

## 📁 Project Structure

```
vitora-marketing/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── features/          # Features page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── demo/              # Demo request page
│   ├── integrations/      # Integrations page
│   └── ai/                # AI/TibaBot page
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── navbar.tsx    # Navigation bar
│   │   ├── footer.tsx    # Site footer
│   │   └── theme-toggle.tsx
│   └── theme-provider.tsx
├── lib/                   # Utilities
│   ├── constants.ts      # Site configuration
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   ├── images/          # Images and logos
│   ├── screenshots/     # Product screenshots
│   └── videos/          # Demo videos
├── tailwind.config.ts   # Tailwind configuration
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies

```

## 🎯 Key Features

### Static Site Generation
All pages are statically generated for optimal performance and SEO.

### Dark Mode
Automatic dark mode with system preference detection and manual toggle.

### Responsive Design
Mobile-first design that works seamlessly on all device sizes.

### Forms
Interactive forms with validation for Contact and Demo requests.

### Performance
- Fast page loads with static generation
- Optimized bundle sizes (~106 KB first load)
- No external font dependencies

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://vitora.nexora.africa

# Optional: Analytics
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Tailwind Configuration

The design system is configured in `tailwind.config.ts` with:
- Custom brand colors
- Extended font sizes
- Custom animations
- Shadow utilities

## 📝 Content Management

Content for pages is currently inline in the component files. For easier content management, consider:

1. Moving copy to JSON/MDX files
2. Using a headless CMS (e.g., Contentful, Sanity)
3. Implementing blog with MDX

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

The site is optimized for Vercel with automatic deployments on push.

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Self-hosted with Node.js

## 📊 Build Output

```
Route (app)                Size        First Load JS
┌ ○ /                      172 B       106 kB
├ ○ /about                 172 B       106 kB
├ ○ /ai                    172 B       106 kB
├ ○ /contact               2.44 kB     105 kB
├ ○ /demo                  2.67 kB     105 kB
├ ○ /features              172 B       106 kB
└ ○ /integrations          172 B       106 kB

○ (Static) - prerendered as static content
```

## 🔒 Security

- No security vulnerabilities detected (CodeQL verified)
- Forms include basic validation
- Environment variables properly scoped
- No sensitive data in client bundle

## 🤝 Contributing

This is a private repository for Nexora Africa Ltd. For internal contributions:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Create a pull request
5. Request review from team

## 📄 License

Copyright © 2026 Nexora Africa Ltd. All rights reserved.

## 📞 Support

For questions or issues:
- Email: info@nexora.africa
- Internal: Slack #vitora-marketing

---

Built with ❤️ for Kenya's healthcare infrastructure
