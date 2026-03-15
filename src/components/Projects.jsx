import { SectionWrapper } from "./common";
import { FolderIcon } from "../utils";
import "./Projects.css";

function Projects({ data }) {
  return (
    <SectionWrapper id="projects" className="projects" title="Projects">
      <div className="projects-grid">
        {data.map((project, index) => (
          <div className="project-card card card--lift-lg" key={index}>
            <div className="project-card-top">
              <FolderIcon className="project-icon" />
              {project.tag && (
                <span className="tag tag--accent">{project.tag}</span>
              )}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-period">{project.period}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.techStack.map((tech) => (
                <span className="tag tag--mono" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Projects;
