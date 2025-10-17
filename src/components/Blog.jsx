import React from "react";
import Navbar from "./Saadullah/Navbar";
import Footer from "./Saadullah/Footer";
function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-heading">
            This is a Blogs page
          </h1>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Blog;
