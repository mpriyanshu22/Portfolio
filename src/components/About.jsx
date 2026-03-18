import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTrophy } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaCode, value: '300+', label: 'DSA Problems Solved' },
    { icon: FaTrophy, value: '1440', label: 'CodeChef Peak Rating' },
    { icon: FaTrophy, value: '1400+', label: 'LeetCode Peak Rating' },
    { icon: FaGraduationCap, value: '3rd Year', label: 'B.Tech IT Student' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am <span className="font-semibold text-blue-600 dark:text-blue-400">Priyanshu Mishra</span>, a 3rd-year B.Tech Information Technology student at{' '}
                <span className="font-semibold">Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur</span>.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I have solved <span className="font-semibold text-purple-600 dark:text-purple-400">300+ DSA problems</span> across platforms like LeetCode, CodeChef, Codeforces, and GFG. My competitive programming journey includes achieving a peak rating of <span className="font-semibold">1440 on CodeChef</span>, and <span className="font-semibold">1400+ on LeetCode</span>.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I have completed a <span className="font-semibold text-blue-600 dark:text-blue-400">Cyber Security Virtual Internship at C-DAC Noida</span> and a <span className="font-semibold">hybrid software development internship at Winkget Express Pvt. Ltd.</span>
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My technical expertise includes <span className="font-semibold">C++</span>, <span className="font-semibold">Data Structures & Algorithms</span>, and <span className="font-semibold text-purple-600 dark:text-purple-400">full-stack web development</span> up to the <span className="font-semibold">MERN stack</span>.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg text-center"
                  >
                    <Icon className="text-4xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
