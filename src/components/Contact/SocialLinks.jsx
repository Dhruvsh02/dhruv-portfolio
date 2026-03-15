import personal from '../../data/personal'

const links = [
  { label: 'LinkedIn', handle: 'dhruv-sharma-5bb043285', url: personal.linkedin, icon: 'in',  accent: 'purple'  },
  { label: 'GitHub',   handle: 'Dhruvsh02',               url: personal.github,   icon: 'GH', accent: 'crimson' },
  { label: 'LeetCode', handle: 'oyQua38Nmk',              url: personal.leetcode, icon: 'LC', accent: 'purple'  },
]

export default function SocialLinks() {
  return (
    <div className="slinks">
      {links.map(l => (
        <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className={`slink slink-${l.accent}`}>
          <div className={`sl-ic sl-ic-${l.accent === 'crimson' ? 'c' : 'p'}`}>{l.icon}</div>
          <div>
            <div className="sl-n">{l.label}</div>
            <div className="sl-h">{l.handle}</div>
          </div>
        </a>
      ))}
    </div>
  )
}