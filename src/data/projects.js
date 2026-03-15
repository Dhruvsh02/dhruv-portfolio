const projects = [
  // ── Replace these with your REAL GitHub repos ──
  // Each entry maps to a card. Set 'comingSoon: true' to show "In Progress".
  {
    id: 1,
    name: 'Project 1',               // real repo name
    desc: 'Short description of what it does and what you learned.',
    tags: ['Python', 'Flask', 'HTML'],
    icon: '🌐',
    accent: 'crimson',               // 'crimson' | 'purple'
    repoUrl: 'https://github.com/Dhruvsh02/repo-name',
    liveUrl: '',                     // leave empty if no live demo
    category: 'Web Dev',             // for filter: 'Web Dev'|'Python'|'DSA'|'Tools'
    stars: 0,
    forks: 0,
  },
  {
    id: 2,
    name: 'DSA Solutions',
    desc: 'Collection of my LeetCode solutions in Python and C++, organised by topic.',
    tags: ['Python', 'C++', 'DSA'],
    icon: '🧮',
    accent: 'purple',
    repoUrl: 'https://github.com/Dhruvsh02',
    liveUrl: '',
    category: 'DSA',
    stars: 0,
    forks: 0,
  },
  {
    id: 3,
    name: 'Banking Application',
    desc: 'Full-stack banking app — account management, transactions, auth. Currently in development.',
    tags: ['Full Stack', 'Python', 'React', 'Database'],
    icon: '🏦',
    accent: 'crimson',
    repoUrl: '',
    liveUrl: '',
    category: 'Web Dev',
    stars: 0,
    forks: 0,
    comingSoon: true,                // shows "In Progress" badge, disables links
  },
]

export const filterCategories = ['All', 'Web Dev', 'Python', 'DSA', 'Tools']

export default projects