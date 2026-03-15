export default function ProjectCard({ project: p }) {
  return (
    <div className={`pcard pcard-${p.accent}${p.comingSoon ? ' pcard-cs' : ''}`}>
      <div className="ph2">
        <div className={`pi pi-${p.accent}`}>{p.icon}</div>
        <div className="plinks">
          {p.comingSoon
            ? <span className="soon-badge">🔒 In Progress</span>
            : <>
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer">↗ Live</a>}
                {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noreferrer">⌥ Repo</a>}
              </>
          }
        </div>
      </div>
      <div className="pn">
        {p.name}
        {p.comingSoon && <span className="cs-badge">Coming Soon</span>}
      </div>
      <div className="pd">{p.desc}</div>
      <div className="ptags">{p.tags.map((t,i) => <span key={i} className="ptag">{t}</span>)}</div>
      {!p.comingSoon && (
        <div className="pfoot">
          <div className="star"><span>★</span> {p.stars}</div>
          <div>Forks: {p.forks}</div>
        </div>
      )}
    </div>
  )
}