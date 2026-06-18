import {
  FaCode,
  FaReact,
  FaNode,
  FaDatabase,
  FaTools,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaServer,
  FaShieldAlt,
  FaTerminal
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiRedis,
  SiPostman,
  SiGithub,
  SiLeetcode,
  SiCodeforces,
  SiVercel,
  SiRender,
  SiDaisyui,
  SiChartdotjs,
  SiWebrtc,
  SiTestinglibrary
} from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

export const skills = [
  {
    category: 'Languages',
    icon: FaCode,
    items: [
      { name: 'C++', icon: FaCode }, // [cite: 47]
      { name: 'C', icon: FaCode }, // [cite: 47]
      { name: 'Java', icon: FaJava }, // [cite: 47]
      { name: 'JavaScript (ES6+)', icon: FaJsSquare }, // [cite: 47]
      { name: 'TypeScript', icon: SiTypescript }, // [cite: 47]
      { name: 'Python', icon: FaPython } // [cite: 47]
    ]
  },
  {
    category: 'Frontend',
    icon: FaReact,
    items: [
      { name: 'React.js', icon: FaReact }, // [cite: 47]
      { name: 'Redux Toolkit', icon: SiRedux }, // [cite: 47]
      { name: 'Tailwind CSS', icon: SiTailwindcss }, // [cite: 47]
      { name: 'DaisyUI', icon: SiDaisyui }, // [cite: 47]
      { name: 'Material UI', icon: SiMui }, // [cite: 47]
      { name: 'Bootstrap', icon: SiBootstrap }, // [cite: 47]
      { name: 'Chart.js', icon: SiChartdotjs } // [cite: 36]
    ]
  },
  {
    category: 'Backend & Runtimes',
    icon: FaNode,
    items: [
      { name: 'Node.js', icon: FaNode }, // [cite: 48]
      { name: 'Express.js', icon: SiExpress }, // [cite: 48]
      { name: 'REST APIs', icon: FaCode }, // [cite: 48]
      { name: 'WebRTC', icon: SiWebrtc }, // [cite: 29]
      { name: 'JWT Authentication', icon: FaShieldAlt }, // [cite: 48]
      { name: 'Mongoose', icon: FaDatabase } // [cite: 48]
    ]
  },
  {
    category: 'Databases & Caching',
    icon: FaDatabase,
    items: [
      { name: 'MongoDB', icon: SiMongodb }, // [cite: 49]
      { name: 'Redis', icon: SiRedis }, // [cite: 49]
      { name: 'MySQL', icon: DiMysql }, // [cite: 49]
      { name: 'PostgreSQL', icon: SiPostgresql } // [cite: 49]
    ]
  },
  {
    category: 'DevOps & Tools',
    icon: FaTools,
    items: [
      { name: 'Docker', icon: FaDocker }, // [cite: 49]
      { name: 'Shell Scripting', icon: FaTerminal }, // [cite: 49]
      { name: 'Git', icon: FaGitAlt }, // [cite: 49]
      { name: 'GitHub', icon: SiGithub }, // [cite: 49]
      { name: 'Postman', icon: SiPostman }, // [cite: 49]
      { name: 'GitLab', icon: SiVercel }, // [cite: 49]
      { name: 'AWS', icon: SiRender }, // [cite: 49]
      { name: 'Linux', icon: FaLinux } // [cite: 49]
    ]
  },
  {
    category: 'CS Fundamentals',
    icon: FaShieldAlt,
    items: [
      { name: 'Data Structures & Algorithms', icon: FaCode }, // [cite: 50]
      { name: 'OOPS', icon: FaCode }, // [cite: 50]
      { name: 'DBMS', icon: FaDatabase }, // [cite: 50]
      { name: 'Operating Systems', icon: FaServer }, // [cite: 10]
      { name: 'Computer Networks', icon: FaServer }, // [cite: 16]
      { name: 'Cyber Security', icon: FaShieldAlt }, // [cite: 17]
      { name: 'Unit Testing', icon: SiTestinglibrary } // [cite: 40]
    ]
  }
];