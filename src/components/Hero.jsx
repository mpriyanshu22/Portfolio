import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi2';

const ROLES = [
  'Software Engineer',
  'Competitive Programmer',
  'MERN Stack Developer',
  'Problem Solver',
];

const Hero = () => {
  const canvasRef = useRef(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const N = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165, 180, 252, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting) {
      if (displayed.length === 0) {
        setIsDeleting(false);
        setRoleIdx((prev) => (prev + 1) % ROLES.length);
      } else {
        timeout = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), 50);
      }
    } else {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 90);
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isPaused, roleIdx]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'priyanshu_resume_2026.pdf';
    link.download = 'priyanshu_resume_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute rounded-full animate-blob"
          style={{
            top: '10%', left: '5%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full animate-blob animation-delay-2000"
          style={{
            top: '50%', right: '5%',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute rounded-full animate-blob animation-delay-4000"
          style={{
            bottom: '10%', left: '30%',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 section-padding text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc',
                boxShadow: '0 0 20px rgba(99,102,241,0.15)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to Work — Available for Opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="font-display font-bold mb-6 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="shimmer-text">Priyanshu Mishra</span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-xl md:text-3xl font-semibold mb-6 h-10 flex items-center justify-center"
            style={{ color: '#94a3b8' }}
          >
            <span style={{ color: '#a5b4fc' }}>{displayed}</span>
            <span className="typing-cursor" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: '#64748b' }}
          >
            Turning Data Structures &amp; Web Technologies into{' '}
            <span style={{ color: '#818cf8' }}>Scalable Solutions</span>
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {[
              { label: 'DSA Problems', value: '500+', color: '#6366f1' },
              { label: 'CodeChef Rating', value: '1600', color: '#a855f7' },
              { label: 'LeetCode Rating', value: '1600+', color: '#ec4899' },
              { label: 'Internships', value: '3', color: '#38bdf8' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="text-center px-6 py-3 rounded-xl"
                style={{
                  background: `rgba(${stat.color === '#6366f1' ? '99,102,241' : stat.color === '#a855f7' ? '168,85,247' : stat.color === '#ec4899' ? '236,72,153' : '56,189,248'}, 0.08)`,
                  border: `1px solid rgba(${stat.color === '#6366f1' ? '99,102,241' : stat.color === '#a855f7' ? '168,85,247' : stat.color === '#ec4899' ? '236,72,153' : '56,189,248'}, 0.2)`,
                }}
              >
                <div className="text-2xl font-bold font-display" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <FaEnvelope size={16} /> Get In Touch
            </motion.a>
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <FaDownload size={16} /> Download Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center gap-5"
          >
            {[
              { href: 'https://github.com/mpriyanshu22', icon: FaGithub, label: 'GitHub', color: '#a5b4fc' },
              { href: 'https://www.linkedin.com/in/priyanshu-mishra-106933294/', icon: FaLinkedin, label: 'LinkedIn', color: '#60a5fa' },
              { href: 'mailto:iitianki22@gmail.com', icon: FaEnvelope, label: 'Email', color: '#c084fc' },
            ].map(({ href, icon: Icon, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#94a3b8',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = color;
                  e.currentTarget.style.borderColor = color + '66';
                  e.currentTarget.style.boxShadow = `0 0 20px ${color}33`;
                  e.currentTarget.style.background = color + '15';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: '#475569' }}>Scroll</span>
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-2xl"
            style={{ color: '#6366f1' }}
          >
            <HiArrowDown />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
