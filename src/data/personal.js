const personal = {
  name: 'Dhruv Sharma',
  firstName: 'Dhruv',
  lastName: 'Sharma',
  role: 'CS Fresher',           // shown in logo / meta
  location: 'Delhi, India',
  email: 'dhruvsharma110044@gmail.com', // replace with your actual email
  bio: `I'm a Computer Science fresher from Delhi with a passion for building things that actually matter. Whether it's a clean backend API, a smooth frontend interface, a data pipeline, or an Ml model - I enjoy the full spectrum of software develpoment. I'm a quick learner who thrives on challenges, and I'm actively looking for opportunities where I can contribute, and make an impact from day one.`,

  // Social links
  github:   'https://github.com/Dhruvsh02',
  linkedin: 'https://www.linkedin.com/in/dhruv-sharma-5bb043285/',
  leetcode: 'https://leetcode.com/u/oyQua38Nmk/',

  // Files — place these in /public
  resume:   '/resume.pdf',
  photo:    '/photo.jpg',        // or import from src/assets/images/photo.jpg

  // Hero typewriter roles
  roles: [
    'CS Fresher',
    'Full Stack Developer',
    'Python Developer',
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
    { label: '🌱 Quick Learner', style: 'purple'  },
  ],

  // About stats
  // need to make changes here later
  stats: [
    { count: 5,   label: 'GitHub Projects', style: 'crimson' },
    { count: 100, label: 'LeetCode Solved',  style: 'purple'  },
    { count: 2,   label: 'Years Coding',     style: 'purple'  },
    { count: 7,   label: 'Technologies',     style: 'crimson' },
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