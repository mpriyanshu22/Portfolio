# Priyanshu Mishra - Portfolio Website

A modern, responsive portfolio website built with React (Vite), Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags and SEO-friendly structure
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Animations**: Powered by Framer Motion

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Helmet Async** - SEO management
- **EmailJS** - Contact form handling

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/mpriyanshu22/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── context/            # React context
│   └── ThemeContext.jsx
├── data/               # Data files
│   ├── skills.js
│   ├── experience.js
│   ├── projects.js
│   └── achievements.js
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🌐 Deployment

This project is ready to deploy on:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

## 📝 Customization

### Update Personal Information

Edit the data files in `src/data/`:
- `skills.js` - Your skills and technologies
- `experience.js` - Your work experience
- `projects.js` - Your projects
- `achievements.js` - Your achievements

### Update Contact Information

Edit `src/components/Contact.jsx` and `src/components/Hero.jsx` to update:
- Email address
- Phone number
- Social media links

### Add Resume

Place your resume PDF in the `public/` folder and name it `resume.pdf`.

## 🎨 Styling

This project uses Tailwind CSS with a custom configuration. Colors, spacing, and other design tokens can be customized in `tailwind.config.js`.

## 📧 Contact Form

The contact form currently uses `mailto:` as a fallback. To enable EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update `src/components/Contact.jsx` with your EmailJS credentials

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Priyanshu Mishra**

- GitHub: [@mpriyanshu22](https://github.com/mpriyanshu22)
- LinkedIn: [Priyanshu Mishra](https://www.linkedin.com/in/priyanshu-mishra-106933294/)
- Email: iitianki22@gmail.com

---

Made with ❤️ by Priyanshu Mishra
