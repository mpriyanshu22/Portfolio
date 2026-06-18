import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';

const SOCIAL_LINKS = [
  { icon: FaGithub,   href: 'https://github.com/mpriyanshu22',                         label: 'GitHub',   color: '#94a3b8' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/priyanshu-mishra-106933294/', label: 'LinkedIn', color: '#38bdf8' },
  { icon: FaEnvelope, href: 'mailto:iitianki22@gmail.com',                             label: 'Email',    color: '#6366f1' },
];

const NAV_ITEMS = [
  { name: 'Home',         href: '#home' },
  { name: 'About',        href: '#about' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Experience',   href: '#experience' },
  { name: 'Projects',     href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact',      href: '#contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-bg relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 opacity-5"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 opacity-5"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent)', filter: 'blur(60px)' }} />
      </div>

      <div className="container-custom py-16 relative z-10">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white font-display"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', boxShadow: '0 0 15px rgba(99,102,241,0.3)' }}>
                  PM
                </div>
                <span className="text-lg font-bold text-white font-display">Priyanshu Mishra</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                Software Developer & MERN Stack Enthusiast crafting scalable solutions with clean code and innovative thinking.
              </p>
            </motion.div>
          </div>

          {/* Quick links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm transition-all duration-200"
                    style={{ color: '#475569' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#a5b4fc'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Social + CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">Connect</h4>
              <div className="flex gap-3 mb-6">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : '_self'}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#64748b',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = color;
                      e.currentTarget.style.borderColor = color + '55';
                      e.currentTarget.style.background = color + '15';
                      e.currentTarget.style.boxShadow = `0 0 15px ${color}33`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#64748b';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
              <a
                href="mailto:iitianki22@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  boxShadow: '0 0 15px rgba(99,102,241,0.25)',
                }}
              >
                <FaEnvelope size={12} /> Let's Work Together
              </a>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="glow-line mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-sm" style={{ color: '#475569' }}>
            Made with <FaHeart className="text-red-500 animate-pulse" size={13} /> by{' '}
            <span className="font-semibold" style={{ color: '#818cf8' }}>Priyanshu Mishra</span>
          </p>
          <p className="text-sm" style={{ color: '#334155' }}>
            © {year} All rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
            style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.25)',
              color: '#818cf8',
            }}
          >
            <FaArrowUp size={12} /> Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
