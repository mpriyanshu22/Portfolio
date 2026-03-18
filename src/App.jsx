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
  return (
    <>
      <Helmet>
        <title>Priyanshu Mishra - Software Developer | React & MERN Stack Enthusiast</title>
        <meta name="description" content="Priyanshu Mishra - Software Developer | React & MERN Stack Enthusiast. 3rd-year B.Tech IT student with 300+ DSA problems solved and expertise in full-stack web development." />
        <meta name="keywords" content="Priyanshu Mishra, Software Developer, React Developer, MERN Stack, Full Stack Developer, Web Developer, Portfolio, Competitive Programming" />
        <meta name="author" content="Priyanshu Mishra" />
        <meta property="og:title" content="Priyanshu Mishra - Software Developer Portfolio" />
        <meta property="og:description" content="Software Developer | React & MERN Stack Enthusiast. Turning Data Structures & Web Technologies into Scalable Solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
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
