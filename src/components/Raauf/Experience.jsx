// import { React, useEffect, useState } from "react";
// import { get, ref } from "firebase/database";
// import { database } from "../../firebase.jsx"; // Assuming firebase config is in this path
// import { motion } from "framer-motion";
// import { Rocket } from "lucide-react";

// const Experience = () => {
//   const [experiences, setExperiences] = useState([]);

//   useEffect(() => {
//     const experiencesRef = ref(database, "experiences");

//     get(experiencesRef)
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const rawData = snapshot.val();

//           // With the new schema, we can directly use the data.
//           // We'll filter out any null entries and add the icon component.
//           const formattedExperiences = rawData
//             .filter((exp) => exp) // Removes any null entries from the array
//             .map((exp) => ({
//               ...exp,
//               icon: Rocket, // Assign the Rocket icon component by default
//             }));

//           setExperiences(formattedExperiences);
//         } else {
//           console.log("No data found at 'experiences' path");
//         }
//       })
//       .catch((error) => {
//         console.error("Firebase error:", error);
//       });
//   }, []); // Empty dependency array ensures this runs only once on mount

//   return (
//     // Use background and gradientStart/End for the section background
//     <section
//       id="experience"
//       className="relative py-24 px-6 overflow-hidden bg-background"
//     >
//       {/* Decorative Glow Elements */}
//       <div className="absolute inset-0 opacity-30">
//         {/* Glow 1: Use primary or secondary color */}
//         <div className="absolute -top-10 left-20 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         {/* Glow 2: Use highlight color for contrast */}
//         <div className="absolute bottom-0 right-20 w-80 h-80 bg-highlight/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-heading">
//             {/* Heading Gradient: from primary to secondary/highlight */}
//             <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
//               Experience
//             </span>
//           </h2>
//           {/* Subtext: Use muted color */}
//           <p className="text-muted text-lg max-w-2xl mx-auto">
//             Building the future — where innovation meets execution.
//           </p>
//         </motion.div>

//         {/* Experience Cards */}
//         <div className="flex justify-center">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//               // Card Border: Use the custom 'gradient-x' animation with the primary/highlight colors
//               className="relative p-[2px] rounded-2xl bg-gradient-to-r from-primary to-highlight animate-gradient-x hover:shadow-lg hover:shadow-primary/40 transition-all duration-500"
//             >
//               {/* Inner Card */}
//               {/* Inner background: darker shade of background/overlay with backdrop-blur */}
//               <div className="glass-effect p-8 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50">
//                 {/* Icon */}
//                 <div
//                   // Icon Background: Use primary to secondary gradient, text-white is good
//                   className={`inline-flex p-4 bg-gradient-to-br ${exp.color} rounded-xl mb-6 transition-transform duration-300 shadow-lg`}
//                 >
//                   {exp.icon && <exp.icon className="w-8 h-8 text-white" />}
//                 </div>

//                 {/* Content */}
//                 {/* Company Name: Use heading color */}
//                 <h3 className="text-2xl font-bold mb-1 text-white">
//                   {exp.company}
//                 </h3>
//                 {/* Role: Use highlight color */}
//                 <p className="text-xl text-heading font-semibold mb-1">
//                   {exp.role}
//                 </p>
//                 {/* Location: Use muted color */}
//                 <p className="text-purple-100 text-sm mb-4 italic">
//                   {exp.location}
//                 </p>
//                 {/* Description: Use text color */}
//                 <p className="text-gray-200 leading-relaxed">
//                   {exp.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

// import { React, useEffect, useState } from "react";
// import { get, ref } from "firebase/database";
// import { database } from "../../firebase.jsx"; // Assuming firebase config is in this path
// import { motion } from "framer-motion";
// import { Rocket } from "lucide-react";

// const Experience = () => {
//   const [experiences, setExperiences] = useState([]);

//   useEffect(() => {
//     const experiencesRef = ref(database, "experiences");

//     get(experiencesRef)
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const rawData = snapshot.val();

//           // Filter out null entries and map the icon
//           const formattedExperiences = rawData
//             .filter((exp) => exp) // Removes any null entries
//             .map((exp) => ({
//               ...exp,
//               icon: Rocket, // Assign the Rocket icon component
//             }));

//           setExperiences(formattedExperiences);
//         } else {
//           console.log("No data found at 'experiences' path");
//         }
//       })
//       .catch((error) => {
//         console.error("Firebase error:", error);
//       });
//   }, []); // Empty dependency array ensures this runs only once on mount

//   return (
//     <section
//       id="experience"
//       className="relative py-24 px-6 overflow-hidden bg-background"
//     >
//       {/* Decorative Glow Elements (Kept from original) */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute -top-10 left-20 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-20 w-80 h-80 bg-highlight/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
//       </div>

//       <div className="max-w-5xl mx-auto relative z-10">
//         {/* Heading (Kept from original) */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-heading">
//             <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
//               Experience
//             </span>
//           </h2>
//           <p className="text-muted text-lg max-w-2xl mx-auto">
//             Building the future — where innovation meets execution.
//           </p>
//         </motion.div>

//         {/* --- New Vertical Timeline UI --- */}
//         <div className="relative mt-24">
//           {/* The Vertical Line */}
//           <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/30 via-secondary/30 to-highlight/30 rounded-full"></div>

//           {/* Timeline Items Container */}
//           <div className="relative flex flex-col gap-y-16">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 className="relative"
//                 initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//               >
//                 {/* Dot on the timeline */}
//                 <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10">
//                   <div
//                     className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${exp.color} ring-8 ring-background shadow-lg shadow-primary/30`}
//                   >
//                     {exp.icon && <exp.icon className="h-6 w-6 text-white" />}
//                   </div>
//                 </div>

//                 {/* Content Card */}
//                 <div
//                   className={`relative w-[calc(50%-3rem)] rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 p-6 shadow-xl
//                     ${
//                       index % 2 === 0
//                         ? "left-[calc(50%+3rem)]" // Right side
//                         : "left-0 text-right" // Left side
//                     }
//                   `}
//                 >
//                   {/* Company Name */}
//                   <h3 className="text-2xl font-bold mb-1 text-heading">
//                     {exp.company}
//                   </h3>
//                   {/* Role */}
//                   <p className="text-xl text-primary font-semibold mb-1">
//                     {exp.role}
//                   </p>
//                   {/* Location */}
//                   <p className="text-sm text-muted mb-4 italic">
//                     {exp.location}
//                   </p>
//                   {/* Description */}
//                   <p className="text-gray-300 leading-relaxed">
//                     {exp.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import { React, useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "../../firebase.jsx"; // Assuming firebase config is in this path
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const experiencesRef = ref(database, "experiencesRauf");

    get(experiencesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const rawData = snapshot.val();
          const formattedExperiences = rawData
            .filter((exp) => exp)
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
  }, []);

  const activeExperience = experiences[activeTab];

  return (
    <section
      id="experience"
      className="relative py-24 px-6 overflow-hidden bg-background"
    >
      {/* Decorative Glow Elements (Kept from original) */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-10 left-20 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-highlight/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading (Kept from original) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        {/* --- New Tabbed Interface --- */}
        <div className="flex flex-col">
          {/* Tab Buttons */}
          <motion.div
            className="flex space-x-2 border-b-2 border-border/50 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative py-3 px-6 text-lg font-medium transition-colors
                  ${
                    activeTab === index
                      ? "text-primary"
                      : "text-muted hover:text-white"
                  }
                `}
              >
                {exp.company}
                {/* Animated Underline */}
                {activeTab === index && (
                  <motion.div
                    className="absolute bottom-[-2px] left-0 right-0 h-1 bg-gradient-to-r from-primary to-highlight"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeExperience && (
              <motion.div
                // Use a unique key to force remount on tab change
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                // Re-using your original glass card styling
                className="relative p-8 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl shadow-primary/20"
              >
                {/* Icon */}
                <div
                  className={`absolute -top-8 -right-4 inline-flex p-4 bg-gradient-to-br ${activeExperience.color} rounded-xl shadow-lg shadow-primary/30`}
                >
                  {activeExperience.icon && (
                    <activeExperience.icon className="w-8 h-8 text-white" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-3xl font-bold mb-1 text-white">
                  {activeExperience.role}
                </h3>
                <p className="text-xl text-primary font-semibold mb-3">
                  @ {activeExperience.company}
                </p>
                <p className="text-purple-100 text-sm mb-5 italic">
                  {activeExperience.location}
                </p>
                <p className="text-gray-200 leading-relaxed text-lg">
                  {activeExperience.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
