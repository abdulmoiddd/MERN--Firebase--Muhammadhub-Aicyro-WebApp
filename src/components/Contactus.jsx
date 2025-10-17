import React from "react";
import Contact from "./Saadullah/Contact";
import Navbar from "./Saadullah/Navbar";
import Footer from "./Saadullah/Footer";

const Contactus = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Navbar />

      {/* Main content area */}

      <Contact />

      <Footer />
    </div>
  );
};

export default Contactus;
