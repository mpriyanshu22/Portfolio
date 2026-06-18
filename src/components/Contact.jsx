import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt,
  FaPaperPlane, FaCheckCircle, FaTimesCircle,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const CONTACT_INFO = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'iitianki22@gmail.com',
    link: 'mailto:iitianki22@gmail.com',
    color: '#6366f1',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 9115332958',
    link: 'tel:+919115332958',
    color: '#34d399',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/mpriyanshu22',
    link: 'https://github.com/mpriyanshu22',
    color: '#94a3b8',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'priyanshu-mishra-106933294',
    link: 'https://www.linkedin.com/in/priyanshu-mishra-106933294/',
    color: '#38bdf8',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focused, setFocused] = useState('');

  useEffect(() => {
    emailjs.init('UtK2erpe66zdG6AJE');
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const result = await emailjs.send(
        'service_wbeovgg', 'template_tjjbn6g',
        {
          to_email: 'iitianki22@gmail.com',  // matches {{to_email}} → To Email field
          name: formData.name,               // matches {{name}} in email body & From Name
          email: formData.email,             // matches {{email}} → Reply To field
          title: formData.subject,           // matches {{title}} in Subject line
          message: formData.message,         // matches {{message}} in email body
        },
        'UtK2erpe66zdG6AJE'
      );
      if (result.text === 'OK') {
        setSubmitStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon. 🚀" });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else throw new Error('Unexpected response');
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.text || error.message || 'Failed to send message. Please email me directly at iitianki22@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  const inputStyle = (name) => ({
    background: focused === name ? 'rgba(99,102,241,0.06)' : 'rgba(255,255,255,0.03)',
    border: focused === name ? '1px solid rgba(99,102,241,0.5)' : '1px solid rgba(255,255,255,0.07)',
    boxShadow: focused === name ? '0 0 0 3px rgba(99,102,241,0.08)' : 'none',
    color: '#e2e8f0',
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    outline: 'none',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.3s ease',
    resize: name === 'message' ? 'none' : undefined,
  });

  return (
    <section id="contact" className="section-padding" style={{ background: '#050816' }}>
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
            Let's Connect
          </span>
          <h2 className="section-heading gradient-text">Get In Touch</h2>
          <div className="section-divider" />
          <p className="mt-4 max-w-2xl mx-auto text-sm" style={{ color: '#64748b' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left column — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-6 font-display">Contact Information</h3>
              <div className="space-y-3">
                {CONTACT_INFO.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={i}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="contact-info-card flex items-center gap-4 p-4 block"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}>
                        <Icon size={16} style={{ color: info.color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs mb-0.5" style={{ color: '#475569' }}>{info.label}</p>
                        <p className="text-sm font-medium text-white truncate">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden rounded-2xl p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))',
                border: '1px solid rgba(99,102,241,0.25)',
              }}
            >
              <div className="absolute top-0 right-0 w-20 h-20"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(168,85,247,0.3), transparent)',
                }} />
              <FaMapMarkerAlt size={22} style={{ color: '#a855f7', marginBottom: 12 }} />
              <h4 className="font-bold text-white mb-1">Location</h4>
              <p className="text-sm" style={{ color: '#94a3b8' }}>Gorakhpur, Uttar Pradesh</p>
              <p className="text-sm" style={{ color: '#64748b' }}>India 🇮🇳</p>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span className="text-sm font-medium" style={{ color: '#34d399' }}>
                Available for new opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="relative rounded-2xl p-7 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}>
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, rgba(99,102,241,0.2), transparent)' }} />

              <h3 className="text-xl font-bold text-white mb-6 font-display relative z-10">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: '#64748b' }}>
                      Your Name
                    </label>
                    <input
                      type="text" id="contact-name" name="name" value={formData.name}
                      onChange={handleChange} required placeholder="John Doe"
                      style={inputStyle('name')}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: '#64748b' }}>
                      Email Address
                    </label>
                    <input
                      type="email" id="contact-email" name="email" value={formData.email}
                      onChange={handleChange} required placeholder="john@example.com"
                      style={inputStyle('email')}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: '#64748b' }}>
                    Subject
                  </label>
                  <input
                    type="text" id="contact-subject" name="subject" value={formData.subject}
                    onChange={handleChange} required placeholder="Collaboration Opportunity"
                    style={inputStyle('subject')}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: '#64748b' }}>
                    Message
                  </label>
                  <textarea
                    id="contact-message" name="message" value={formData.message}
                    onChange={handleChange} required rows={6}
                    placeholder="Hi Priyanshu, I'd love to discuss..."
                    style={inputStyle('message')}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                {/* Status message */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{
                      background: submitStatus.type === 'success'
                        ? 'rgba(52,211,153,0.1)' : 'rgba(239,68,68,0.1)',
                      border: `1px solid ${submitStatus.type === 'success' ? 'rgba(52,211,153,0.3)' : 'rgba(239,68,68,0.3)'}`,
                      color: submitStatus.type === 'success' ? '#34d399' : '#f87171',
                    }}
                  >
                    {submitStatus.type === 'success'
                      ? <FaCheckCircle size={16} />
                      : <FaTimesCircle size={16} />}
                    <span className="text-sm">{submitStatus.message}</span>
                  </motion.div>
                )}

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-white relative overflow-hidden"
                  style={{
                    background: isSubmitting
                      ? 'rgba(99,102,241,0.4)'
                      : 'linear-gradient(135deg, #6366f1, #a855f7)',
                    boxShadow: isSubmitting ? 'none' : '0 0 25px rgba(99,102,241,0.35)',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Shimmer on hover */}
                  {!isSubmitting && (
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <div className="absolute top-0 -left-full w-full h-full"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                        }} />
                    </div>
                  )}
                  <FaPaperPlane size={16} className={isSubmitting ? 'animate-pulse' : ''} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
