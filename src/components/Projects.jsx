import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: 'easeOut' }}
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image section */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Gradient overlay always present */}
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(5,8,22,0.95) 0%, rgba(5,8,22,0.4) 50%, transparent 100%)',
          }} />

        {/* Project number */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', boxShadow: '0 0 12px rgba(99,102,241,0.5)' }}>
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Hover overlay with links */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-end justify-center pb-4 gap-3 px-4"
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'rgba(15,15,30,0.9)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
              >
                <FaGithub /> Code
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', boxShadow: '0 0 15px rgba(99,102,241,0.4)' }}
              >
                <FaExternalLinkAlt size={11} /> Live Demo
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: '#64748b' }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.2)',
                color: '#a5b4fc',
              }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Key features */}
        <div className="space-y-1.5">
          {project.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs" style={{ color: '#475569' }}>
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: '#6366f1' }} />
              {feature}
            </div>
          ))}
        </div>

        {/* Quick links at bottom */}
        <div className="flex gap-3 mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium transition-all duration-200"
            style={{ color: '#64748b' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a5b4fc'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
          >
            <FaGithub size={13} /> GitHub
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium transition-all duration-200"
            style={{ color: '#64748b' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a5b4fc'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
          >
            <FaExternalLinkAlt size={10} /> Live <FaArrowRight size={9} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={{ background: '#050816' }}>
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
            What I've Built
          </span>
          <h2 className="section-heading gradient-text">Projects</h2>
          <div className="section-divider" />
          <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: '#64748b' }}>
            A selection of my projects ranging from full-stack web apps to competitive programming tools.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="mb-4 text-sm" style={{ color: '#64748b' }}>
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/mpriyanshu22"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(99,102,241,0.3)',
              boxShadow: '0 0 20px rgba(99,102,241,0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(99,102,241,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.15)';
            }}
          >
            <FaGithub size={18} /> View All on GitHub <FaArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
