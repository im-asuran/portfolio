import { SectionWrapper } from "./common";
import "./About.css";

function About({ data }) {
  return (
    <SectionWrapper id="about" className="about" title="About Me">
      <div className="about-content">
        <p>
          I'm <strong>{data.name}</strong>, a passionate software developer
          currently working at <strong>Zoho Corporation</strong> as a Member
          Technical Staff. With a strong foundation in C++ and systems
          programming, I specialize in building native desktop applications
          and embedded software solutions.
        </p>
        <p>
          My journey spans from IoT projects during my internship to defence
          applications and enterprise-grade endpoint management software. I
          thrive on writing efficient, platform-specific code and love solving
          challenging engineering problems.
        </p>
        <div className="about-highlights">
          <div className="highlight-item">
            <span className="highlight-number">3+</span>
            <span className="highlight-label">Years Experience</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">3</span>
            <span className="highlight-label">Companies</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">3+</span>
            <span className="highlight-label">Projects</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">4</span>
            <span className="highlight-label">Certifications</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default About;
