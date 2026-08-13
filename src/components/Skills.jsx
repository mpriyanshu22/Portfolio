import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/skills';

const CATEGORY_COLORS = {
  'Languages':         { from: '#6366f1', to: '#818cf8', glow: 'rgba(99,102,241,0.25)' },
  'Frontend':          { from: '#38bdf8', to: '#60a5fa', glow: 'rgba(56,189,248,0.25)' },
  'Backend & Runtimes':{ from: '#34d399', to: '#6ee7b7', glow: 'rgba(52,211,153,0.25)' },
  'Databases & Caching':{ from: '#f59e0b', to: '#fcd34d', glow: 'rgba(245,158,11,0.25)' },
  'DevOps & Tools':    { from: '#ec4899', to: '#f472b6', glow: 'rgba(236,72,153,0.25)' },
  'CS Fundamentals':   { from: '#a855f7', to: '#c084fc', glow: 'rgba(168,85,247,0.25)' },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const activeCategory = skills[activeTab];
  const colors = CATEGORY_COLORS[activeCategory?.category] || CATEGORY_COLORS['Languages'];

  return (
    <section id="skills" className="section-padding" style={{ background: '#050816' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-4"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', color: '#818cf8' }}>
              My Arsenal
            </span>
            <h2 className="section-heading gradient-text">Skills & Technologies</h2>
            <div className="section-divider" />
          </div>

          {/* Tab pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {skills.map((cat, i) => {
              const catColors = CATEGORY_COLORS[cat.category] || CATEGORY_COLORS['Languages'];
              const isActive = activeTab === i;
              const CatIcon = cat.icon;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${catColors.from}22, ${catColors.to}22)`
                      : 'rgba(255,255,255,0.03)',
                    border: isActive
                      ? `1px solid ${catColors.from}66`
                      : '1px solid rgba(255,255,255,0.07)',
                    color: isActive ? catColors.from : '#64748b',
                    boxShadow: isActive ? `0 0 20px ${catColors.glow}` : 'none',
                  }}
                >
                  <CatIcon size={14} />
                  {cat.category}
                </motion.button>
              );
            })}
          </div>

          {/* Active category card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(${colors.from === '#6366f1' ? '99,102,241' : colors.from === '#38bdf8' ? '56,189,248' : colors.from === '#34d399' ? '52,211,153' : colors.from === '#f59e0b' ? '245,158,11' : colors.from === '#ec4899' ? '236,72,153' : '168,85,247'}, 0.04) 0%, rgba(5,8,22,0) 100%)`,
                border: `1px solid ${colors.from}22`,
                boxShadow: `0 0 40px ${colors.glow}`,
              }}
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${colors.from}, transparent)`,
                  filter: 'blur(40px)',
                }} />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl"
                  style={{
                    background: `${colors.from}20`,
                    border: `1px solid ${colors.from}40`,
                    boxShadow: `0 0 15px ${colors.glow}`,
                  }}>
                  {(() => {
                    const Icon = activeCategory.icon;
                    return <Icon size={22} style={{ color: colors.from }} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">{activeCategory.category}</h3>
                  <p className="text-sm" style={{ color: '#64748b' }}>{activeCategory.items.length} technologies</p>
                </div>
              </div>

              {/* Skill chips */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-3"
              >
                {activeCategory.items.map((item, itemIndex) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={itemIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.08, y: -4 }}
                      className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl cursor-default"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#94a3b8',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${colors.from}18`;
                        e.currentTarget.style.borderColor = `${colors.from}55`;
                        e.currentTarget.style.color = colors.from;
                        e.currentTarget.style.boxShadow = `0 4px 15px ${colors.glow}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.color = '#94a3b8';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {ItemIcon && <ItemIcon size={16} />}
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* All-at-once overview grid */}
          {/* <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((cat, i) => {
              const catColors = CATEGORY_COLORS[cat.category] || CATEGORY_COLORS['Languages'];
              const CatIcon = cat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => setActiveTab(i)}
                  className="p-5 rounded-xl cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: activeTab === i
                      ? `1px solid ${catColors.from}55`
                      : '1px solid rgba(255,255,255,0.06)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg"
                      style={{ background: `${catColors.from}15`, border: `1px solid ${catColors.from}30` }}>
                      <CatIcon size={16} style={{ color: catColors.from }} />
                    </div>
                    <span className="font-semibold text-sm text-white">{cat.category}</span>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${catColors.from}20`, color: catColors.from, border: `1px solid ${catColors.from}35` }}>
                      {cat.items.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.slice(0, 4).map((item, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-md"
                        style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b', border: '1px solid rgba(255,255,255,0.06)' }}>
                        {item.name}
                      </span>
                    ))}
                    {cat.items.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-md"
                        style={{ background: `${catColors.from}15`, color: catColors.from }}>
                        +{cat.items.length - 4} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div> */}
          
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
