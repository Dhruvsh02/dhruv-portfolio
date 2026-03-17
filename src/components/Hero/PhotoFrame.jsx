import personal from '../../data/personal'

export default function PhotoFrame({ name }) {
  return (
    <div className="photo-wrap">
      <div className="photo-frame">
        <div className="blob-c" />
        <div className="blob-p" />
        <div className="ring2" />
        <div className="ring1" />

        {/* Hex + chip wrapped together */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div className="hex">
            <img src={personal.photo} alt={name} />
          </div>
          {/* Chip is now relative to hex, never moves */}
          <div style={{
            position: 'absolute',
            bottom: '-18px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--bg2)',
            border: '1px solid rgba(139,92,246,0.35)',
            borderRadius: '999px',
            padding: '6px 16px',
            fontFamily: 'var(--fm)',
            fontSize: '0.73rem',
            color: 'var(--purple)',
            whiteSpace: 'nowrap',
            zIndex: 20,
            boxShadow: '0 4px 20px rgba(139,92,246,0.2)',
          }}>
            ● Open to Internships &amp; Jobs
          </div>
        </div>

      </div>
    </div>
  )
}