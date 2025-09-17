# Abdul Rafay - Portfolio Website

A professional portfolio website showcasing expertise in AI automation and web development. Built with Next.js, TypeScript, and modern web technologies.

## 🚀 Live Demo

[View Live Site](https://abdulrafay.dev) | [View on Vercel](https://abdul-rafay-portfolio.vercel.app)

## ✨ Features

- **Modern Design**: Dark theme with high-contrast, minimal aesthetic
- **3D WebGL Visuals**: Interactive 3D hero section with fallback support
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG AA+ compliant with keyboard navigation
- **Performance**: Optimized for Lighthouse scores 90+
- **SEO Optimized**: Server-rendered meta tags and structured data
- **Contact Form**: Functional contact form with email integration
- **Case Studies**: Detailed project showcases with metrics

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **React Three Fiber** - 3D graphics and WebGL
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation

### Backend
- **Next.js API Routes** - Serverless functions
- **Nodemailer** - Email sending functionality
- **PostgreSQL** - Database (optional)

### Development
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🏗️ Project Structure

```
abdul-rafay-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── 3d/               # 3D components
│   │   ├── layout/           # Layout components
│   │   ├── sections/         # Page sections
│   │   └── __tests__/        # Component tests
│   └── styles/               # Design system
├── content/                  # Content files
├── public/                   # Static assets
└── docs/                     # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdulrafay/portfolio.git
   cd abdul-rafay-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   # Email Configuration
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=abdul@example.com
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME="Abdul Rafay Portfolio"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

The contact form requires SMTP configuration. Here are setup instructions for popular providers:

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an App Password
3. Use your Gmail address and app password in `.env.local`

### Other Providers
- **SendGrid**: Use API key instead of SMTP
- **Mailgun**: Use API key instead of SMTP
- **AWS SES**: Use AWS credentials

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables

2. **Set environment variables in Vercel**
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=abdul@example.com
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

3. **Deploy**
   - Vercel will automatically deploy on every push to main
   - Custom domains can be configured in the Vercel dashboard

### Other Platforms

- **Netlify**: Use the build command `npm run build` and publish directory `.next`
- **AWS Amplify**: Connect your repository and use the same build settings
- **Railway**: Deploy directly from GitHub with automatic builds

## 🎨 Customization

### Design System

The design system is defined in `src/styles/design-tokens.ts`:

```typescript
export const designTokens = {
  colors: {
    background: '#0B0F15',
    surface: '#0F1720',
    text: {
      primary: '#E6EEF3',
      secondary: '#9AA6B2',
    },
    accent: {
      primary: '#7C4DFF',
      secondary: '#00E0A1',
    },
  },
  // ... more tokens
}
```

### Content Updates

1. **Personal Information**: Update `src/app/layout.tsx` metadata
2. **About Section**: Modify `src/components/sections/AboutSection.tsx`
3. **Skills**: Update `src/components/sections/SkillsSection.tsx`
4. **Projects**: Add new projects in `src/components/sections/ProjectsSection.tsx`
5. **Contact Info**: Update contact details in `src/components/sections/ContactSection.tsx`

### 3D Assets

Replace the 3D scene in `src/components/3d/HeroCanvas.tsx`:
- Use Blender to create custom models
- Export as GLB/GLTF format
- Optimize with DRACO compression
- Add to `public/models/` directory

## 📊 Performance

The site is optimized for performance:

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Excellent LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting
- **Images**: Next.js Image component with optimization
- **Fonts**: Google Fonts with display swap

## ♿ Accessibility

Built with accessibility in mind:

- **WCAG AA+** compliance
- **Keyboard navigation** support
- **Screen reader** friendly
- **Focus management** for modals and forms
- **Color contrast** meets standards
- **ARIA labels** and semantic HTML

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Testing
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help:

- **Email**: abdul@example.com
- **LinkedIn**: [linkedin.com/in/abdulrafay](https://linkedin.com/in/abdulrafay)
- **GitHub**: [github.com/abdulrafay](https://github.com/abdulrafay)

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Vercel** for hosting and deployment
- **Three.js** community for 3D web graphics
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations

---

**Built with ❤️ by Abdul Rafay**