import React from "react";

// import { Helmet } from "react-helmet";
// import { Toaster } from "@/components/ui/toaster";
import Hero from "./Saadullah/Hero";
import About from "./Saadullah/About";
import Experience from "./Saadullah/Experience";
import Projects from "./Saadullah/Projects";
import Skills from "./Saadullah/Skills";
// import Contact from "./Saadullah/Contact";
import Footer from "./Saadullah/Footer";

const saadullah = () => {
  return (
    <div>
      <div>
        <div>
          <section>
            <Hero />
          </section>
          <section>
            <About />
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
    </div>
  );
};

export default saadullah;
