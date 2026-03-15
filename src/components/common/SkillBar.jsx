/**
 * SkillBar — Reusable progress bar for skill proficiency.
 * Used by Skills component for both languages and frameworks.
 */

import { levelToPercent } from "../../utils";
import "./SkillBar.css";

function SkillBar({ name, level }) {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: levelToPercent(level) }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
