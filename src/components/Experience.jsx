import { SectionWrapper } from "./common";
import "./Experience.css";

function Experience({ data }) {
  return (
    <SectionWrapper id="experience" className="experience" title="Experience">
      <div className="timeline">
        {data.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-company">{exp.company}</p>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-period">{exp.period}</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
              </div>
              <ul className="timeline-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="timeline-tech">
                {exp.techStack.map((tech) => (
                  <span className="tag tag--primary" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Experience;
