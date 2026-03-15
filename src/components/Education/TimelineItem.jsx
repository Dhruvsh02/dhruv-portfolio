export default function TimelineItem({ edu }) {
  return (
    <div className={`ti ti-${edu.accent}`}>
      <div className="edu-card">
        <div className={`eyr eyr-${edu.accent}`}>{edu.period}</div>
        <div className="edeg">{edu.degree}</div>
        <div className="esch">{edu.school}</div>
        <span className={`etag etag-${edu.accent}`}>{edu.badge}</span>
        {edu.ongoing && <span className={`etag etag-${edu.accent} etag-on`}>Final Year</span>}
      </div>
    </div>
  )
}