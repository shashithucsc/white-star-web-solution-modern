# White Star Web Solutions - Landing Page

A modern, futuristic glassmorphism-styled landing page built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## 🎨 Design Features

- **Dark Navy Blue Theme** with glowing neon blue and white accents
- **Glassmorphism Effects** with blurred translucent panels
- **Sticky Navigation Header** with smooth scroll and glassmorphism blur
- **Smooth Animations** using Framer Motion
- **Beautiful Typography** with Inter (body), Orbitron (headings), and Space Grotesk fonts
- **Interactive Components** with hover effects and glow animations
- **Fully Responsive** design for all screen sizes
- **Animated Particle Background** with canvas-based network effect

## 🚀 Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4** (Latest)
- **Framer Motion** for animations
- **Lucide React** for icons
- **TypeScript** for type safety

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
white_star/
├── app/
│   ├── globals.css          # Global styles with glassmorphism
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main landing page
├── components/
│   ├── ParticleBackground.tsx  # Animated canvas background
│   ├── Header.tsx              # Sticky navigation header
│   ├── HeroSection.tsx         # Hero/Header section
│   ├── AboutSection.tsx        # About company section
│   ├── CompaniesSection.tsx    # Portfolio/Companies grid
│   ├── WhyChooseSection.tsx    # Features section
│   ├── CTASection.tsx          # Call-to-action section
│   └── Footer.tsx              # Footer with contact info
└── public/                   # Static assets
```

## 🎯 Page Sections

### 0. Navigation Header (Sticky)
- Glassmorphism effect with backdrop blur
- Smooth scroll navigation
- Responsive design with mobile menu button
- CTA button with glow effect

### 1. Hero Section
- Full-screen gradient background
- Animated headline with gradient text
- CTA button with smooth scroll
- Floating particle background

### 2. About Section
- Glassmorphism card layout
- Company description
- Animated tech illustration

### 3. Our Companies Section
- 6 company cards with:
  - Artslab Creatives
  - Legistant
  - Aumerix
  - FlowCart
  - Nyvara
  - Influencer Showcase
- Hover animations and glow effects

### 4. Why Choose Section
- 4 feature cards showcasing expertise
- Icon-based layout
- Smooth entrance animations

### 5. CTA Section
- Email contact button
- Animated background
- Prominent call-to-action

### 6. Footer
- Contact information
- Social media links
- Copyright notice

## 🎨 Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --background: #020617;
  --foreground: #f1f5f9;
  --navy-dark: #0f172a;
  --navy-light: #1e293b;
  --neon-blue: #0ea5e9;
  --neon-cyan: #06b6d4;
}
```

### Fonts
Fonts are loaded via Google Fonts in `globals.css`:
- **Inter** - Modern, clean body font with excellent readability
- **Orbitron** - Futuristic font for headings and brand name
- **Space Grotesk** - Contemporary font for emphasis text

### Animations
Adjust Framer Motion transitions in individual component files.

## 📱 Contact Information

- **Email**: info@whitestarwebsolutions.com
- **Phone**: +94 778385938 / +94 6273901

## 📄 License

© 2025 White Star Web Solutions (Pvt) Ltd. All rights reserved.

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 🌟 Key Features Implemented

✅ Sticky navigation header with glassmorphism  
✅ Smooth scroll navigation between sections  
✅ Glassmorphism UI with backdrop blur  
✅ Smooth scroll animations  
✅ Framer Motion page transitions  
✅ Responsive grid layouts  
✅ Interactive hover effects  
✅ Glow border animations  
✅ Particle background with canvas  
✅ Custom scrollbar styling  
✅ SEO-optimized metadata  
✅ TypeScript type safety  
✅ Beautiful modern typography (Inter, Orbitron, Space Grotesk)  

---

Built with ❤️ by White Star Web Solutions
