import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import { FaStar } from 'react-icons/fa';

const CATEGORY_STYLES = {
  'Hackathon':   { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.25)',  glow: 'rgba(245,158,11,0.2)' },
  'Competition': { color: '#ec4899', bg: 'rgba(236,72,153,0.1)',  border: 'rgba(236,72,153,0.25)', glow: 'rgba(236,72,153,0.2)' },
  'Leadership':  { color: '#38bdf8', bg: 'rgba(56,189,248,0.1)',  border: 'rgba(56,189,248,0.25)', glow: 'rgba(56,189,248,0.2)' },
  'Coding':      { color: '#6366f1', bg: 'rgba(99,102,241,0.1)',  border: 'rgba(99,102,241,0.25)', glow: 'rgba(99,102,241,0.2)' },
};

const AchievementCard = ({ achievement, index }) => {
  const style = CATEGORY_STYLES[achievement.category] || CATEGORY_STYLES['Coding'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.04, y: -8 }}
      className="achievement-card group relative"
    >
      {/* Animated gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl overflow-hidden">
        <div className="h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${style.color}, transparent)` }} />
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${style.glow}, transparent 70%)` }} />

      {/* Icon + category */}
      <div className="flex items-start gap-4 relative z-10">
        {/* Emoji icon */}
        <div className="text-4xl flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl"
          style={{ background: style.bg, border: `1px solid ${style.border}` }}>
          {achievement.icon}
        </div>

        <div className="flex-1 min-w-0">
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-2">
            <FaStar size={10} style={{ color: style.color }} />
            <span className="text-xs font-semibold tracking-wider uppercase"
              style={{ color: style.color }}>
              {achievement.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-white mb-1.5 font-display leading-snug">
            {achievement.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding" style={{ background: '#020610' }}>
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
            style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#fbbf24' }}>
            🏆 Milestones
          </span>
          <h2 className="section-heading gradient-text">Achievements</h2>
          <div className="section-divider" />
          <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: '#64748b' }}>
            Recognitions, rankings, and milestones from my academic and coding journey.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>

        {/* Decorative bottom bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 glow-line"
        />
      </div>
    </section>
  );
};

export default Achievements;
