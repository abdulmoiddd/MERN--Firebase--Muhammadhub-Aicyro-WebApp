import { React, useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "../../firebase.jsx"; // Assuming firebase config is in this path
import { motion } from "framer-motion";
import { Globe, TrendingUp, CheckCircle } from "lucide-react";

// Helper object to map icon names from the database to the imported components
const iconComponents = {
  TrendingUp,
  CheckCircle,
  Globe,
};

const About = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const aboutRef = ref(database, "about");

    get(aboutRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const rawData = snapshot.val();

          // Filter out any null/falsy entries and map the icon string to a component
          const formattedStats = rawData
            .filter((stat) => stat) // Removes any null entries from the array
            .map((stat) => ({
              ...stat,
              icon: iconComponents[stat.icon], // Replace string with component
            }));

          setStats(formattedStats);
        } else {
          console.log("No data found at 'about' path");
        }
      })
      .catch((error) => {
        console.error("Firebase error:", error);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden bg-background text-text"
    >
      {/* Background glow effect - Adjusted to use 'background' and 'primary' related colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/20 to-background/30 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-heading">
            {/* Gradient for Heading - Using your primary/secondary/highlight scheme */}
            <span className="bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(108,99,255,0.3)]">
              About Me
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Innovating at the intersection of{" "}
            {/* Highlighted keywords using 'highlight' and 'primary' */}
            <span className="text-highlight font-semibold">AI</span>,{" "}
            <span className="text-primary font-semibold">Cloud</span>, and{" "}
            <span className="text-secondary font-semibold">Security</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Section - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Body text color is 'text' or 'muted' */}
            <p className="text-text text-lg leading-relaxed">
              I,{" "}
              <span className="text-highlight font-semibold">
                Muhammad Saadullah
              </span>
              , founded{" "}
              <span className="text-highlight font-semibold">
                Aicyro Solutions
              </span>{" "}
              to empower global businesses to innovate faster, safer, and
              smarter.
            </p>

            <p className="text-text text-lg leading-relaxed">
              A{" "}
              <span className="text-primary font-semibold">
                Full Stack & AI/ML Engineer
              </span>{" "}
              with 6+ years of experience building SaaS platforms, AI-powered
              apps, and secure cloud-native products.
            </p>

            {/* Mission Card */}
            <div className="relative group rounded-2xl border border-border/70 bg-gradient-to-br from-background via-transparent to-primary/10 backdrop-blur-md p-6 shadow-lg transition-all duration-500 hover:shadow-primary/30 hover:scale-[1.02]">
              {/* Card Title Gradient */}
              <p className="text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                My Mission
              </p>
              <p className="text-muted italic leading-relaxed">
                To design and deliver AI-powered and cloud-scalable solutions
                that integrate innovation, performance, and cybersecurity —
                ensuring every product thrives under speed, compliance, and
                reliability.
              </p>
            </div>
          </motion.div>

          {/* Right Section - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // Stat Card Styling: adjusted to border and gradients from your scheme
                className="p-6 rounded-2xl bg-gradient-to-br from-background/50 to-secondary/10 border border-border backdrop-blur-md shadow-md hover:shadow-highlight/30 hover:scale-[1.03] transition-all duration-300 group"
              >
                <div className="flex items-center gap-5">
                  {/* Icon Background: gradient using primary/secondary */}
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {stat.icon && <stat.icon className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    {/* Value text: gradient using primary/highlight */}
                    <p className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    {/* Label text: 'muted' color */}
                    <p className="text-muted text-sm tracking-wide uppercase">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
