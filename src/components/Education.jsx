import { SectionWrapper } from "./common";
import { GraduationCapIcon } from "../utils";
import "./Education.css";

function Education({ data }) {
  return (
    <SectionWrapper id="education" className="education" title="Education">
      <div className="education-grid">
        {data.map((edu, index) => (
          <div className="education-card card card--lift" key={index}>
            <div className="education-icon">
              <GraduationCapIcon />
            </div>
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>
            <p className="education-location">{edu.location}</p>
            <div className="education-footer">
              <span className="education-period">{edu.period}</span>
              <span className="education-score">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Education;
