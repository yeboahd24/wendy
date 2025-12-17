# Wendy AB Boateng - Portfolio Website

A modern, responsive personal portfolio website for Wendy AB Boateng, a Retail & Merchandising Support Professional.

## 🌟 Features

- **Responsive Design**: Mobile-first approach that works beautifully on all devices
- **Modern UI**: Clean, professional aesthetic with smooth animations
- **Interactive Components**: Smooth scrolling, hover effects, and fade-in animations
- **Contact Form**: Integrated with EmailJS for direct message sending
- **Downloadable CV**: One-click CV download functionality
- **Accessible**: Semantic HTML with proper contrast and ARIA labels

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **EmailJS** - Email service integration

## 📋 Sections

1. **Hero** - Introduction with profile picture, name, and call-to-action buttons
2. **About** - Professional background and skills overview
3. **Core Competencies** - Grid of key skills with icons
4. **Work Experience** - Timeline of professional experience
5. **Education** - Academic qualifications
6. **Skills** - Tag-style skill showcase
7. **Contact** - Contact information and message form
8. **Footer** - Quick links and contact details

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19+ or v22.12+)
- npm, yarn, or pnpm

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## ⚙️ Configuration

### EmailJS Setup

To enable the contact form:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following values in `src/components/Contact.jsx`:
   - `serviceId`: Your EmailJS service ID
   - `templateId`: Your EmailJS template ID
   - `publicKey`: Your EmailJS public key

### CV Upload

Replace the placeholder file at `public/Wendy_AB_Boateng_CV.pdf` with your actual CV PDF.

### Profile Picture

Add your profile picture to replace the placeholder in the Hero section:
1. Add your image to the `public` folder (e.g., `public/profile.jpg`)
2. Update the `Hero.jsx` component to use the image instead of the placeholder

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🌐 Deployment

This project can be easily deployed to:

- **Netlify**: Connect your Git repository and deploy automatically
- **Vercel**: Import your repository and deploy with zero configuration
- **GitHub Pages**: Use the `gh-pages` package to deploy the `dist` folder

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

## 📝 Customization

### Colors

Edit the CSS variables in `src/index.css` under the `:root` selector to change the color scheme.

### Fonts

The website uses:
- **Kumbh Sans** for headings
- **Open Sans** for body text

To change fonts, update the Google Fonts import in `src/index.css` and the CSS variables.

### Content

Update the content in each component file under `src/components/`:
- `Hero.jsx` - Personal information and tagline
- `About.jsx` - About me text
- `Competencies.jsx` - Core competencies list
- `Experience.jsx` - Work experience details
- `Education.jsx` - Educational background
- `Skills.jsx` - Skills list
- `Contact.jsx` - Contact information

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

**Wendy AB Boateng**
- Email: Stephaniekela6@gmail.com
- Phone: +233 279 261 773
- Location: Accra, Ghana

---

© 2025 Wendy AB Boateng. All rights reserved.