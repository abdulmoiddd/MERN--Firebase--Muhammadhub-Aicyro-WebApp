import { React, useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { motion } from "framer-motion";
// IMPORTANT: Please adjust the path below to your firebase config file
// to match your project's file structure.
import { database } from "../../firebase.jsx";
import { Brain, Cloud, Cpu, Shield, Code, Database } from "lucide-react";

// Helper object to map icon names from the database to the imported components
const iconComponents = {
  Brain,
  Cloud,
  Cpu,
  Shield,
  Code,
  Database,
};

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // This ref now points to "skills" to match your schema file
    const skillsRef = ref(database, "skillsRauf");

    get(skillsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const rawData = snapshot.val();

          // Filter out any null/falsy entries and map the icon string to a component
          const formattedSkills = rawData
            .filter((skill) => skill) // Removes any null entries from the array
            .map((skill) => ({
              ...skill,
              icon: iconComponents[skill.icon], // Replace string with component
            }));

          setSkills(formattedSkills);
        } else {
          console.log("No data found at 'skills' path");
        }
      })
      .catch((error) => {
        console.error("Firebase error:", error);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Base background color
    <section
      id="skills"
      className="relative py-24 px-6 overflow-hidden bg-background"
    >
      {/* Decorative Glows - Using theme colors */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-16 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-highlight/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-heading">
            {/* Heading Gradient - Using core theme colors */}
            <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          {/* Subtext - Using muted color */}
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A mastery of technologies — driving innovation and performance.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              // Card Wrapper: Uses a subtle border effect on hover
              className="relative p-[1px] rounded-2xl group hover:shadow-primary/30 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                // Card Inner: Uses background/overlay colors and border for definition
                className="glass-effect p-8 rounded-2xl bg-background/70 backdrop-blur-xl border border-border/70 h-full hover:scale-[1.02] transition-all duration-300"
              >
                {/* Icon */}
                <div
                  // Icon Background: Uses the custom color from the skills array
                  className={`inline-flex p-4 bg-gradient-to-br ${skill.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {skill.icon && <skill.icon className="w-8 h-8 text-white" />}
                </div>

                {/* Content */}
                {/* Title: Uses heading color */}
                <h3 className="text-2xl font-bold mb-2 text-heading">
                  {skill.title}
                </h3>
                {/* Description: Uses text color */}
                <p className="text-text leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
