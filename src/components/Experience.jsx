import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const TYPE_COLORS = {
  'Internship': { color: '#34d399', bg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.3)' },
  'Virtual Internship': { color: '#38bdf8', bg: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.3)' },
  'Part-time': { color: '#a855f7', bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.3)' },
  'Full-time': { color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)' },
};

const ExperienceCard = ({ exp, index }) => {
  const typeStyle = TYPE_COLORS[exp.type] || TYPE_COLORS['Internship'];
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-6 z-10 transform md:-translate-x-1/2 -translate-x-1/2">
        <div className="timeline-dot" />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'rgba(99,102,241,0.3)',
            animation: 'pulse-glow 2s ease-in-out infinite',
            animationDelay: `${index * 0.3}s`,
          }}
        />
      </div>

      {/* Connector line on mobile */}
      <div className="absolute left-0 top-12 bottom-0 w-px md:hidden"
        style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), transparent)', marginLeft: '-0.5px' }} />

      {/* Card */}
      <div className={`ml-8 md:ml-0 md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
          whileHover={{ scale: 1.02, y: -6 }}
          className="relative rounded-2xl p-6 overflow-hidden group"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(99,102,241,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
          }}
        >
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #a855f7, transparent)' }} />

          {/* Corner glow */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at top right, rgba(99,102,241,0.1), transparent)',
              borderRadius: '0 16px 0 0',
            }} />

          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 font-display">{exp.title}</h3>
              <p className="font-semibold" style={{ color: '#818cf8' }}>{exp.company}</p>
            </div>
            <span className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: typeStyle.bg, border: `1px solid ${typeStyle.border}`, color: typeStyle.color }}>
              {exp.type}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-5 text-xs" style={{ color: '#64748b' }}>
            <span className="flex items-center gap-1.5">
              <FaCalendar style={{ color: '#6366f1' }} /> {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt style={{ color: '#a855f7' }} /> {exp.location}
            </span>
          </div>

          {/* Achievements */}
          <ul className="space-y-2 mb-5">
            {exp.achievements.map((ach, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm" style={{ color: '#94a3b8' }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }} />
                {ach}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {exp.tech.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-medium"
                style={{
                  background: 'rgba(99,102,241,0.08)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  color: '#a5b4fc',
                }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Certificate */}
          {exp.certificate && (
            <motion.a
              href={exp.certificate}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                boxShadow: '0 0 15px rgba(99,102,241,0.3)',
              }}
            >
              <FaCertificate size={13} /> View Certificate <FaExternalLinkAlt size={10} />
            </motion.a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="section-padding" style={{ background: '#020610' }}>
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-4"
            style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', color: '#818cf8' }}>
            My Journey
          </span>
          <h2 className="section-heading gradient-text">Experience</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <div className="timeline-line w-0.5 h-full" />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
