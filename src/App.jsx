import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  Loader,
  Navbar,
  Works,
  Certs,
  Leadership,
} from "./components";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const timeout = window.setTimeout(
      () => setShowSplash(false),
      prefersReducedMotion ? 50 : 1500
    );

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      <>
        <div
          className="relative z-0 bg-primary"
          aria-hidden={showSplash}
          inert={showSplash}
        >
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
          </div>
        </div>
        {showSplash && <Loader />}
      </>
    </BrowserRouter>
  );
};

export default App;
