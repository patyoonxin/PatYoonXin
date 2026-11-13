import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  Navbar,
  Works,
  Certs,
  Leadership,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {" "}
        <div id="home" className="bg-hero-pattern bg-cover bg-no-repeat bg-center scroll-mt-24">
          <Navbar />
          <Hero />
        </div>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Works />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education />
        </section>

        <section id="certs" className="scroll-mt-24">
          <Certs />
        </section>

        <section id="leadership" className="scroll-mt-24">
          <Leadership />
        </section>
      
        <div id="contact" className="relative z-0 scroll-mt-24">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
