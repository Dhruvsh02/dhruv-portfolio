import SkillBar from './SkillBar'

export default function SkillGroup({ group: g }) {
  return (
    <div className="sgrp">
      <div className="sgrp-t">
        <span className={`si2 si-${g.accent}`}>{g.icon}</span>
        {g.group}
      </div>
      {g.items.map((item, i) => <SkillBar key={i} item={item} accent={g.accent} />)}
    </div>
  )
}