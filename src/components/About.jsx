import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTrophy, FaBolt } from 'react-icons/fa';

const STATS = [
  {
    icon: FaCode,
    value: '500+',
    label: 'DSA Problems Solved',
    color: '#6366f1',
    shadow: 'rgba(99,102,241,0.3)',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
  },
  {
    icon: FaTrophy,
    value: '1600+',
    label: 'CodeChef Peak Rating',
    color: '#f59e0b',
    shadow: 'rgba(245,158,11,0.3)',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
  },
  {
    icon: FaTrophy,
    value: '1600+',
    label: 'LeetCode Peak Rating',
    color: '#a855f7',
    shadow: 'rgba(168,85,247,0.3)',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.2)',
  },
  {
    icon: FaGraduationCap,
    value: 'Final Year',
    label: 'B.Tech IT — MMMUT',
    color: '#38bdf8',
    shadow: 'rgba(56,189,248,0.3)',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.2)',
  },
];

const StatCard = ({ stat, index }) => {
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
      whileHover={{ scale: 1.06, y: -8 }}
      className="relative p-6 rounded-2xl text-center overflow-hidden cursor-default"
      style={{
        background: stat.bg,
        border: `1px solid ${stat.border}`,
        boxShadow: `0 4px 20px ${stat.shadow}`,
      }}
    >
      {/* Glow corner */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20 rounded-bl-full"
        style={{ background: `radial-gradient(circle, ${stat.color}, transparent)` }} />

      <div className="flex justify-center mb-3">
        <div className="p-3 rounded-xl"
          style={{ background: `${stat.color}20`, boxShadow: `0 0 15px ${stat.shadow}` }}>
          <Icon className="text-2xl" style={{ color: stat.color }} />
        </div>
      </div>
      <div className="text-3xl font-bold font-display mb-1" style={{ color: stat.color }}>
        {stat.value}
      </div>
      <div className="text-sm" style={{ color: '#64748b' }}>{stat.label}</div>
    </motion.div>
  );
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="section-padding" style={{ background: '#020610' }}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-4"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', color: '#818cf8' }}>
              Get To Know Me
            </span>
            <h2 className="section-heading gradient-text">About Me</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Text content — 3 cols */}
            <motion.div variants={itemVariants} className="md:col-span-3 space-y-5">
              {[
                <>
                  I am{' '}
                  <span className="font-semibold" style={{ color: '#818cf8' }}>Priyanshu Mishra</span>
                  , a Final-year B.Tech Information Technology student at{' '}
                  <span className="font-semibold text-white">Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur</span>.
                </>,
                <>
                  I have solved{' '}
                  <span className="font-semibold" style={{ color: '#c084fc' }}>500+ DSA problems</span>
                  {' '}across platforms like LeetCode, CodeChef, Codeforces, and GFG. My competitive programming journey includes achieving a peak rating of{' '}
                  <span className="font-semibold text-white">1600+ on CodeChef</span> and{' '}
                  <span className="font-semibold text-white">1600+ on LeetCode</span>.
                </>,
                <>
                  I have completed a{' '}
                  <span className="font-semibold" style={{ color: '#60a5fa' }}>Full Stack Web Development Internship at Unified Mentor Pvt. Ltd.</span>,{' '}
                  <span className="font-semibold" style={{ color: '#60a5fa' }}>Cyber Security Virtual Internship at C-DAC Noida</span> and a{' '}
                  <span className="font-semibold" style={{ color: '#60a5fa' }}>Hybrid Software Development Internship at Winkget Express Pvt. Ltd.</span>
                </>,
                <>
                  My technical expertise includes{' '}
                  <span className="font-semibold text-white">C++</span>,{' '}
                  <span className="font-semibold text-white">Data Structures &amp; Algorithms</span>, and{' '}
                  <span className="font-semibold" style={{ color: '#c084fc' }}>Full-stack web development</span>{' '}
                  with the{' '}
                  <span className="font-semibold text-white">MERN stack</span>. Alongside development, I'm building expertise in{' '}
                  <span className="font-semibold text-white">DevOps and Cloud Computing</span> with Linux, Docker, and AWS.
                </>,
              ].map((para, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="p-5 rounded-xl text-base leading-relaxed"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: '#94a3b8',
                    borderLeft: '3px solid rgba(99,102,241,0.4)',
                  }}
                >
                  {para}
                </motion.div>
              ))}

              {/* Quick facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                {['Gorakhpur, India 🇮🇳', 'Open to Remote', 'B.Tech IT — 2027', 'iitianki22@gmail.com'].map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats grid — 2 cols */}
            <motion.div variants={itemVariants} className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {STATS.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
