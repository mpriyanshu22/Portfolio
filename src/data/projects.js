export const projects = [
  {
    id: 1,
    title: 'CodeWithMe',
    description: 'A full-stack online coding platform with real-time code execution, AI-powered tutoring, and video editorials. Supports 10+ programming languages and delivers a seamless coding experience.',
    longDescription: 'Engineered a MERN-based coding platform featuring browser-based code execution through Judge0, an AI-powered DSA tutor using Gemini AI, Monaco Editor integration, and Cloudinary-hosted video editorials. Improved user engagement with interactive learning tools, reduced API response times through Redis caching and rate limiting, and containerized services with Docker for scalable deployment on Vercel and Render.',
    image: 'CodeWithMe.png',
    tech: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Docker',
      'Redis',
      'Judge0 API',
      'Gemini AI',
      'Cloudinary'
    ],
    features: [
      'Real-time code execution for 10+ languages',
      'Monaco Editor integration',
      'AI-powered DSA tutor with Gemini AI',
      'Cloudinary-hosted video editorials',
      'Redis caching and API rate limiting',
      'Dockerized deployment on Vercel & Render'
    ],
    github: 'https://github.com/mpriyanshu22/Coding-Platform.git',
    live: 'https://coding-platform-liart-five.vercel.app/',
    status: 'completed'
  },
  {
    id: 2,
    title: 'HomeTownHub',
    description: 'A community and event management platform that connects citizens, service providers, and administrators through real-time communication, secure authentication, and role-based access control.',
    longDescription: 'Built a scalable MERN-stack community platform featuring JWT-based authentication, bcrypt password hashing, and role-based access control for Citizens, Service Providers, and Administrators. Implemented WebSocket-powered real-time communication for community interactions and event updates, supporting 50+ concurrent users. Developed a centralized Admin Dashboard with moderation workflows, significantly reducing provider approval times and improving platform management efficiency.',
    image: 'HomeTownHub.png',
    tech: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Redis',
      'WebSockets',
      'JWT',
      'REST APIs',
      'bcrypt'
    ],
    features: [
      'JWT authentication and secure session management',
      'Role-Based Access Control (RBAC) for 3 user roles',
      'WebSocket-powered real-time communication',
      'Community and event management system',
      'Centralized Admin Dashboard',
      'Provider moderation and approval workflows',
      'Redis-backed performance optimization',
      'Responsive MERN-stack architecture'
    ],
    github: 'https://github.com/mpriyanshu22/ProjectHometownHub.git',
    live: 'https://project-hometown-hub.vercel.app/',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Expense Tracker',
    description: 'A full-stack expense tracking application with comprehensive analytics and category-based filtering. Optimized data retrieval by 25% and successfully supported 50+ users.',
    longDescription: 'A comprehensive full-stack expense tracking application that helps users manage their finances efficiently. Features include intuitive CRUD operations, smart category-based filtering, and detailed monthly analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    tech: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'CRUD operations for expenses',
      'Category-based filtering',
      'Monthly analytics dashboard',
      'User authentication',
      'Data visualization'
    ],
    github: 'https://github.com/mpriyanshu22/ExpenseTracker.git',
    live: 'https://expensetracker-olq4.onrender.com/',
    status: 'completed'
  }
];
