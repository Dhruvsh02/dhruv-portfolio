// Drop photo.jpg in /public and it auto-loads.
// If no photo, shows a placeholder.
export default function PhotoFrame({ name }) {
  return (
    <div className="photo-wrap">
      <div className="photo-frame">
        <div className="blob-c" />
        <div className="blob-p" />
        <div className="ring2" />
        <div className="ring1" />
        <div className="hex">
          {/* Replace with <img src="/photo.jpg" alt={name} /> once you have a photo */}
          <div className="hex-ph">
            <div className="phi">👤</div>
            <div className="pht">{name.toUpperCase()}</div>
          </div>
        </div>
        <div className="avail">Open to Internships &amp; Jobs</div>
      </div>
    </div>
  )
}