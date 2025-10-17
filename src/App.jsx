import React from "react";
import { Helmet } from "react-helmet";

import { Route, Routes } from "react-router";
import Saadullah from "./components/saadullah";
import Rauf from "./components/Rauf";
import Mission from "./components/Mission";
import Contactus from "./components/Contactus";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Muhammad Saadullah — CEO, AICYRO Solutions | AI/ML & SaaS Architect
        </title>
        <meta
          name="description"
          content="Official personal website of Muhammad Saadullah — Founder & CEO of AICYRO Solutions. AI/ML Engineer and SaaS Architect passionate about building intelligent cloud products and cyber-innovations."
        />
        {/* Summary */}
        <meta
          name="keywords"
          content="Muhammad Saadullah, AICYRO Solutions, CEO, AI Engineer, ML Engineer, SaaS Architect, Cybersecurity, Pakistan, Tech Founder"
        />
        {/* Author name */}
        <meta name="author" content="Muhammad Saadullah" />

        <link rel="canonical" href="https://www.muhammadhub.com" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Muhammad Saadullah — CEO, AICYRO Solutions"
        />
        <meta
          property="og:description"
          content="Founder & CEO of AICYRO Solutions — advancing AI, Machine Learning, and Cybersecurity innovations."
        />
        <meta property="og:url" content="https://www.muhammadhub.com" />
        <meta
          property="og:image"
          content="https://www.muhammadhub.com/og-image.jpg"
        />
        <meta property="og:site_name" content="Muhammad Saadullah" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Muhammad Saadullah — CEO, AICYRO Solutions"
        />
        <meta
          name="twitter:description"
          content="AI/ML Engineer & Founder of AICYRO Solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.muhammadhub.com/og-image.jpg"
        />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Saadullah",
            "url": "https://www.muhammadhub.com",
            "image": "https://www.muhammadhub.com/profile.jpg",
            "jobTitle": "Founder & CEO",
            "worksFor": {
              "@type": "Organization",
              "name": "AICYRO Solutions",
              "url": "https://www.aicyro.com"
            },
            "sameAs": [
              "https://www.linkedin.com/in/muhammadsaadullah",
              "https://x.com/muhammadhub",
              "https://www.crunchbase.com/person/muhammad-saadullah",
              "https://www.aicyro.com"
            ],
            "description": "Muhammad Saadullah is the Founder & CEO of AICYRO Solutions, an AI and Cybersecurity-focused software company developing SaaS and cloud-native products.",
            "nationality": "Pakistani"
          }
        `}</script>
      </Helmet>
      <div>
        <Routes>
          <Route path="/" element={<Saadullah />} />
          <Route path="/rauf" element={<Rauf />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>

        {/* <Saadullah /> */}
      </div>
    </>
  );
}

export default App;
