import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code } from "lucide-react";
import Navbar from "../Saadullah/Navbar";
import heroImg from "../../asset/Sirrauf.jpg";
import { Link } from "react-router";

const HeroTwo = () => {
  const scrollToAbout = () => {
    document.getElementById("about-two")?.scrollIntoView({
      // Assuming a different about section id
      behavior: "smooth",
    });
  };

  // Using a placeholder image to resolve the path error.
  const heroImgTwo = heroImg;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-12 bg-background">
      {/* Navbar (non-fixed, transparent) */}
      <div className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
        <Navbar />
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gradientStart/50 via-background/80 to-gradientEnd/40 -z-10"></div>

      {/* Floating Glow Blobs - Repositioned for a new feel */}
      <div className="absolute inset-0 opacity-40">
        {/* <div className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div> */}
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-highlight rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content - Image and Text sections are swapped */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 mt-16">
        {/* Left Image Section - New Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center order-last lg:order-first"
        >
          {/* Now using rounded-full for a perfect circle */}
          <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full p-[4px] bg-gradient-to-r from-primary via-secondary to-highlight animate-gradient-x">
            <div className="w-full h-full rounded-full bg-background overflow-hidden">
              <img
                src={heroImgTwo}
                alt="Muhammad Rauf, CEO of Aicyro Solutions"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Section - New Animation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-gradient-to-r from-gradientStart/40 to-gradientEnd/40 backdrop-blur-sm mb-4"
          >
            <Code className="w-5 h-5 text-highlight animate-pulse" />
            <span className="text-base font-medium text-text">
              Muhammad Rauf, CEO of Aicyro Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="text-heading">Cyber Security Leader &</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(255,255,255,0.15)]">
              Ethical Hacker
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-text max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            <span className="text-highlight font-medium">
              Penetration Testing
            </span>{" "}
            | Threat Detection Expert solutions | Founder Aicyro Solutions
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-10"
          >
            {/* <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-highlight text-white rounded-full font-semibold shadow-lg shadow-primary/40 hover:shadow-secondary/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a> */}

            <Link
              to="/Contactus"
              className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-highlight text-white rounded-full font-semibold shadow-lg shadow-primary/40 hover:shadow-secondary/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full font-semibold border border-border text-text hover:text-heading hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
            >
              See My Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator (Mobile) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer lg:hidden"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 animate-bounce text-highlight drop-shadow-[0_0_8px_rgba(158,139,255,0.6)]" />
      </motion.div>
    </section>
  );
};

export default HeroTwo;
