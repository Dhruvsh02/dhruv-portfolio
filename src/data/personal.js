const personal = {
  name: 'Dhruv Sharma',
  firstName: 'Dhruv',
  lastName: 'Sharma',
  role: 'CS Fresher',           // shown in logo / meta
  location: 'Delhi, India',
  email: 'dhruvsharma110044@gmail.com', // replace with your actual email
  bio: `I'm a Computer Science student from Delhi with a strong focus on backend
        development and software engineering. I enjoy building scalable APIs,
        designing reliable systems, and developing real-world applications.
        I also work with full-stack technologies and have a growing interest in
        data engineering and data-driven systems. I'm a fast learner who enjoys
        solving challenging problems and I'm actively looking for opportunities
        where I can contribute and grow as a developer from day one.`,

  // Social links
  github:   'https://github.com/Dhruvsh02',
  linkedin: 'https://www.linkedin.com/in/dhruv-sharma-5bb043285/',
  leetcode: 'https://leetcode.com/u/oyQua38Nmk/',

  // Files — place these in /public
  resume:   '/Dhruv_resume.pdf',
  photo:    '/photo4.jpg',       // or import from src/assets/images/photo.jpg

  // Hero typewriter roles
  roles: [
    'CS Fresher',
    'Python & Backend Developer',
    'Full Stack Developer',
    'Data Science Enthusiast',
    'Cloud Explorer',
    'Problem Solver',
    'AI/ML Explorer',
    'Quick Learner',
  ],

  // Hero tags
  tags: [
    { label: '🎓 CS Fresher',    style: 'crimson' },
    { label: '🐍 Python',        style: 'purple'  },
    { label: '💻 Full Stack',    style: 'crimson' },
    { label: '🧠 DSA',           style: 'purple'  },
    { label: '🤖 AI/ML',         style: 'crimson' },
    { label: '📊 Data Science',  style: 'purple'  },
    { label: '☁️ Cloud',         style: 'crimson'  },
    { label: '🧪 Testing & CI/CD',     style: 'purple'  },
    { label: '🌱 Quick Learner', style: 'crimson'  },
  ],

  // About stats
  // need to make changes here later
  stats: [
    { count: 8,   label: 'GitHub Projects', style: 'crimson' },
    { count: 110, label: 'LeetCode Solved',  style: 'purple'  },
    { count: 2,   label: 'Years Coding',     style: 'purple'  },
    { count: 10,   label: 'Technologies',     style: 'crimson' },
  ],

  // Currently looking for
  lookingFor: [
    { label: 'Internships',      style: 'crimson' },
    { label: 'Entry-Level Jobs', style: 'purple'  },
    { label: 'Freelance',        style: 'crimson' },
    { label: 'Open Source',      style: 'purple'  },
  ],
}

export default personal