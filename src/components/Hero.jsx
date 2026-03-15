import profileImg from "../assets/profile.jpg";
import "./Hero.css";

function Hero({ data }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src={profileImg} alt={data.name} className="hero-avatar-img" />
        </div>
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">{data.name}</h1>
        <h2 className="hero-title">{data.title}</h2>
        <p className="hero-tagline">{data.tagline}</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a href="#experience" className="btn btn-outline">
            View My Work
          </a>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="hero-circle"></div>
        <div className="hero-circle hero-circle-2"></div>
      </div>
    </section>
  );
}

export default Hero;
