import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/mpriyanshu22',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/priyanshu-mishra-106933294/',
      label: 'LinkedIn',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:iitianki22@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="container-custom">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Priyanshu Mishra</h3>
            <p className="text-gray-400 mb-6">Software Developer | React & MERN Stack Enthusiast</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-2xl text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <div className="border-t border-gray-800 pt-8">
            <p className="flex items-center justify-center gap-2 text-gray-400">
              Made with <FaHeart className="text-red-500" /> by Priyanshu Mishra
            </p>
            <p className="mt-2 text-gray-500 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
