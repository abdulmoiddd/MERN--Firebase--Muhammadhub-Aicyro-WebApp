// import { React, useEffect, useState } from "react";
// import { get, ref } from "firebase/database";
// // IMPORTANT: Please adjust the path below to your firebase config file
// // to match your project's file structure.
// import { database } from "../../firebase";
// import { motion } from "framer-motion";
// import { ExternalLink, Zap, Video, Bot } from "lucide-react";

// // An object to map string names from Firebase to the actual icon components
// const iconMap = {
//   zap: Zap,
//   Video: Video,
//   Bot: Bot,
// };

// const Projects = () => {
//   // Initialize state with an empty array to prevent errors during initial render
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     // Correct the database reference to point to the "projects" node
//     const projectsRef = ref(database, "projectsRauf");

//     get(projectsRef)
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const rawData = snapshot.val();

//           // Transform the data to match the component's expected structure
//           const formattedProjects = rawData
//             .filter((project) => project) // This removes any null entries from the array
//             .map((project) => ({
//               // Map Firebase keys (e.g., "Description") to component keys (e.g., "description")
//               title: project.title,
//               description: project.Description, // Capital 'D' from Firebase
//               tags: project.Tags, // Capital 'T' from Firebase
//               color: project.color,
//               // Use the iconMap to get the correct component from the string
//               icon: iconMap[project.icon] || ExternalLink, // Fallback to a default icon
//             }));

//           setProjects(formattedProjects);
//           console.log("Fetched and formatted data:", formattedProjects);
//         } else {
//           console.log("No data found at 'projects' path");
//         }
//       })
//       .catch((error) => {
//         console.log("Firebase error:", error);
//       });
//   }, []); // Empty dependency array ensures this runs only once on mount

//   return (
//     <section
//       id="projects"
//       className="py-24 px-4 relative overflow-hidden bg-background"
//     >
//       {/* Subtle animated gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-primary/10 to-background/30 -z-10 blur-3xl" />

//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">
//             <span className="bg-gradient-to-r from-primary via-highlight to-secondary bg-clip-text text-transparent">
//               Recent Highlights
//             </span>
//           </h2>
//           <p className="text-muted text-lg max-w-2xl mx-auto">
//             Transforming ideas into impactful, high-performance solutions
//           </p>
//         </motion.div>

//         {/* This grid will now be populated with data from Firebase */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               className="relative group bg-background/50 backdrop-blur-md p-8 rounded-3xl border border-border/70 hover:border-primary/50 shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
//             >
//               <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-highlight/10 blur-xl" />

//               <div
//                 className={`relative inline-flex p-4 bg-gradient-to-br ${project.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
//               >
//                 {/* Dynamically render the icon component */}
//                 <project.icon className="w-8 h-8 text-white" />
//               </div>

//               <h3 className="text-2xl font-bold mb-3 text-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-highlight transition-all duration-300">
//                 {project.title}
//               </h3>

//               <p className="text-text mb-6 leading-relaxed">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {project.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm text-highlight border border-border/70 hover:border-primary/70 transition-all"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <ExternalLink className="w-5 h-5 text-primary" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { React, useEffect, useState } from "react";
import { get, ref } from "firebase/database";
// IMPORTANT: Please adjust the path below to your firebase config file
// to match your project's file structure.
import { database } from "../../firebase";
import { motion } from "framer-motion";
import { ExternalLink, Zap, Video, Bot } from "lucide-react";

// An object to map string names from Firebase to the actual icon components
const iconMap = {
  zap: Zap,
  Video: Video,
  Bot: Bot,
};

const Projects = () => {
  // Initialize state with an empty array to prevent errors during initial render
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Correct the database reference to point to the "projects" node
    const projectsRef = ref(database, "projectsRauf"); // <-- Using your specified path

    get(projectsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const rawData = snapshot.val();

          // Transform the data to match the component's expected structure
          const formattedProjects = rawData
            .filter((project) => project) // This removes any null entries from the array
            .map((project) => ({
              // Map Firebase keys (e.g., "Description") to component keys (e.g., "description")
              title: project.title,
              description: project.Description, // Capital 'D' from Firebase
              tags: project.Tags, // Capital 'T' from Firebase
              color: project.color,
              // Use the iconMap to get the correct component from the string
              icon: iconMap[project.icon] || ExternalLink, // Fallback to a default icon
            }));

          setProjects(formattedProjects);
          console.log("Fetched and formatted data:", formattedProjects);
        } else {
          console.log("No data found at 'projects' path");
        }
      })
      .catch((error) => {
        console.log("Firebase error:", error);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  // We duplicate the projects array to create the seamless loop
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-background" // Removed px-4 for full-width
    >
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-primary/10 to-background/30 -z-10 blur-3xl" />

      {/* Kept px-4 here for the heading container */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">
            <span className="bg-gradient-to-r from-primary via-highlight to-secondary bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Transforming ideas into impactful, high-performance solutions
          </p>
        </motion.div>
      </div>

      {/* --- ✅ NEW CONTINUOUS SLIDER --- */}
      {/* 1. The Viewport: Clips the content */}
      <div className="w-full overflow-hidden">
        {/* 2. The Track: This element moves */}
        <motion.div
          className="flex gap-10" // Use gap for spacing
          animate={{
            x: ["0%", "-50%"], // Moves from start to the halfway point (where the 2nd list starts)
          }}
          transition={{
            ease: "linear",
            duration: 40, // Adjust duration to change speed (higher = slower)
            repeat: Infinity,
          }}
        >
          {/* 3. The Content (Rendered Twice) */}
          {duplicatedProjects.map((project, index) => (
            <motion.div
              key={index}
              // Removed the whileInView animation
              // Added fixed width and flex-shrink-0
              className="relative group bg-background/50 backdrop-blur-md p-8 rounded-3xl border border-border/70 hover:border-primary/50 shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 w-[375px] flex-shrink-0 pointer-events-none"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-highlight/10 blur-xl" />

              <div
                className={`relative inline-flex p-4 bg-gradient-to-br ${project.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {/* Dynamically render the icon component */}
                <project.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-highlight transition-all duration-300">
                {project.title}
              </h3>

              <p className="text-text mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm text-highlight border border-border/70 hover:border-primary/70 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
