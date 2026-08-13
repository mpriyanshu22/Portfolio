import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { experiences } from './data/experience';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Priyanshu Mishra — Software Developer & MERN Stack Engineer</title>
        <meta name="description" content="Priyanshu Mishra — Software Developer | React & MERN Stack Enthusiast. Final-year B.Tech IT student with 500+ DSA problems solved and expertise in full-stack web development." />
        <meta name="keywords" content="Priyanshu Mishra, Software Developer, React Developer, MERN Stack, Full Stack Developer, Web Developer, Portfolio, Competitive Programming" />
        <meta name="author" content="Priyanshu Mishra" />
        <meta property="og:title" content="Priyanshu Mishra — Software Developer Portfolio" />
        <meta property="og:description" content="Software Developer | React & MERN Stack Enthusiast. Turning Data Structures & Web Technologies into Scalable Solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Cursor glow effect */}
      <div
        className="cursor-glow hidden lg:block"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      <ThemeProvider>
        <div className="min-h-screen bg-dark-900">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience experiences={experiences} />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
