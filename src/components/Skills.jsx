import { SectionWrapper, SkillBar } from "./common";
import "./Skills.css";

function Skills({ data, certifications, extracurricular }) {
  return (
    <SectionWrapper id="skills" className="skills" title="Skills & More">
      <div className="skills-layout">
        <div className="skills-column">
          <h3 className="skills-subtitle">Languages</h3>
          <div className="skills-list">
            {data.languages.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <h3 className="skills-subtitle">Frameworks</h3>
          <div className="skills-list">
            {data.frameworks.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <h3 className="skills-subtitle">Coursework</h3>
          <div className="coursework-tags">
            {data.coursework.map((course) => (
              <span className="tag tag--outline" key={course}>
                {course}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-column">
          <h3 className="skills-subtitle">Certifications</h3>
          <ul className="cert-list">
            {certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>

          <h3 className="skills-subtitle">Extracurricular</h3>
          <ul className="cert-list">
            {extracurricular.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Skills;
