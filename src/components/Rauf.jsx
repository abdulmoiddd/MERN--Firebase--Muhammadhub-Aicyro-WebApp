import React from "react";
import Navbar from "./Saadullah/Navbar";
import Footer from "./Saadullah/Footer";
import HeroTwo from "./Raauf/Hero";
import AboutTwo from "./Raauf/About";
import Experience from "./Raauf/Experience";
import Projects from "./Raauf/Projects";
import Skills from "./Raauf/Skills";
// import Contact from "./Saadullah/Contact";

const Rauf = () => {
  return (
    <div>
      <div>
        <section>
          <HeroTwo />
        </section>
        <section>
          <AboutTwo />
          <Experience />
          <Projects />
          <Skills />
          {/* <Contact /> */}
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Rauf;
