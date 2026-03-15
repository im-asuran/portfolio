import "./App.css";
import portfolioData from "./data/portfolioData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const data = portfolioData;

  return (
    <div className="app">
      <Navbar />
      <Hero data={data.personal} />
      <About data={data.personal} />
      <Experience data={data.experience} />
      <Projects data={data.projects} />
      <Skills
        data={data.skills}
        certifications={data.certifications}
        extracurricular={data.extracurricular}
      />
      <Education data={data.education} />
      <Contact data={data.personal} />
      <Footer name={data.personal.name} />
    </div>
  );
}

export default App;

