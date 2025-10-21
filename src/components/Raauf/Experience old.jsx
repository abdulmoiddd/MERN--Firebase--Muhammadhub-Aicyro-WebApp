import { React, useEffect, useState } from "react";
import { get, ref } from "firebase/database";
// IMPORTANT: The path to your firebase config file is incorrect.
// Please adjust the path below to match your project's structure.
// For example, it might be "./firebase.jsx" or "../firebase.jsx".
import { database } from "../../firebase";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const experiencesRef = ref(database, "experiencesRauf");

    get(experiencesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const rawData = snapshot.val();

          // Filter out any null entries and add the icon component.
          const formattedExperiences = rawData
            .filter((exp) => exp) // Removes any null entries from the array
            .map((exp) => ({
              ...exp,
              icon: Rocket, // Assign the Rocket icon component
            }));

          setExperiences(formattedExperiences);
        } else {
          console.log("No data found at 'experiences' path");
        }
      })
      .catch((error) => {
        console.error("Firebase error:", error);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section
      id="experience"
      className="relative py-24 px-6 overflow-hidden bg-background"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-10 left-20 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
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
            <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Building the future — where innovation meets execution.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="flex justify-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative p-[2px] rounded-2xl bg-gradient-to-r from-primary to-highlight animate-gradient-x hover:shadow-lg hover:shadow-primary/40 transition-all duration-500"
            >
              {/* Inner Card */}
              <div className="glass-effect p-8 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 bg-gradient-to-br ${exp.color} rounded-xl mb-6 transition-transform duration-300 shadow-lg`}
                >
                  {exp.icon && <exp.icon className="w-8 h-8 text-white" />}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-1 text-heading">
                  {exp.company}
                </h3>
                <p className="text-xl text-highlight font-semibold mb-1">
                  {exp.role}
                </p>
                <p className="text-muted text-sm mb-4 italic">{exp.location}</p>
                <p className="text-text leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
