import { SectionWrapper } from "./common";
import { MailIcon, PhoneIcon, LinkedInIcon } from "../utils";
import "./Contact.css";

function Contact({ data }) {
  return (
    <SectionWrapper id="contact" className="contact" title="Get In Touch">
      <div className="contact-content">
        <p className="contact-text">
          I'm always open to new opportunities and interesting projects. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="contact-links">
          <a href={`mailto:${data.email}`} className="contact-item">
            <MailIcon className="contact-icon" />
            <span>{data.email}</span>
          </a>
          <a href={`tel:${data.phone}`} className="contact-item">
            <PhoneIcon className="contact-icon" />
            <span>{data.phone}</span>
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <LinkedInIcon className="contact-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
        <a href={`mailto:${data.email}`} className="btn btn-primary contact-btn">
          Say Hello
        </a>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
