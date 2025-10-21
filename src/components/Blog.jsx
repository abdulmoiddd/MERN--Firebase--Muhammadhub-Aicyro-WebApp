// import { React, useEffect, useState } from "react";
// import Navbar from "./Saadullah/Navbar.jsx";
// import Footer from "./Saadullah/Footer";
// import { get, ref } from "firebase/database";
// import { database } from "../firebase.jsx";
// import { motion } from "framer-motion";
// import { FileText, ChevronDown, ChevronUp } from "lucide-react";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [expandedBlogs, setExpandedBlogs] = useState({});

//   useEffect(() => {
//     const blogsRef = ref(database, "blogs");
//     get(blogsRef)
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const rawData = snapshot.val();
//           const formattedBlogs = rawData
//             .filter((blog) => blog)
//             .map((blog) => ({
//               ...blog,
//               icon: FileText,
//             }));
//           setBlogs(formattedBlogs);
//         } else {
//           console.log("No data found at 'blogs' path");
//         }
//       })
//       .catch((error) => {
//         console.error("Firebase error:", error);
//       });
//   }, []);

//   const toggleReadMore = (index) => {
//     setExpandedBlogs((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-background text-text">
//       <Navbar />
//       <section
//         // id="blog"
//         // className="relative py-24 px-6 overflow-hidden bg-background"
//         className="py-20 overflow-hidden bg-background"
//       >
//         {/* Glows and Heading */}
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute -top-10 left-20 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-0 right-20 w-80 h-80 bg-highlight/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
//         </div>
//         <div className="max-w-6xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-heading">
//               <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
//                 Latest Insights
//               </span>
//             </h2>
//             <p className="text-muted text-lg max-w-2xl mx-auto">
//               Exploring the frontiers of technology, one post at a time.
//             </p>
//           </motion.div>

//           {/* ✅ THE CHANGE IS HERE */}
//           <div className="grid grid-cols-1 gap-8">
//             {blogs.map((blog, index) => {
//               const isExpanded = expandedBlogs[index];
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2, duration: 0.6 }}
//                   className="relative p-[2px] rounded-2xl bg-gradient-to-r from-primary to-highlight animate-gradient-x hover:shadow-lg hover:shadow-primary/40 transition-all duration-500"
//                 >
//                   <div className="glass-effect h-full flex flex-col p-8 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50">
//                     <div className="flex-grow">
//                       <div
//                         className={`inline-flex p-4 bg-gradient-to-br ${
//                           blog.color || "from-primary to-secondary"
//                         } rounded-xl mb-6 shadow-lg`}
//                       >
//                         <FileText className="w-8 h-8 text-white" />
//                       </div>
//                       <h3 className="text-2xl font-bold mb-2 text-heading">
//                         {blog.title}
//                       </h3>
//                       <div className="text-purple-100 text-sm mb-4 italic">
//                         <span>By {blog.author}</span> | <span>{blog.date}</span>
//                       </div>

//                       <div className="text-gray-200 leading-relaxed">
//                         {isExpanded ? (
//                           blog.fullContent &&
//                           blog.fullContent.map((paragraph, pIndex) => (
//                             <p key={pIndex} className="mb-4">
//                               {paragraph}
//                             </p>
//                           ))
//                         ) : (
//                           <p>{blog.summary}</p>
//                         )}
//                       </div>
//                     </div>

//                     <button
//                       onClick={() => toggleReadMore(index)}
//                       className="flex items-center gap-2 mt-6 text-gray-300 font-semibold hover:text-primary transition-colors duration-300 self-start"
//                     >
//                       {isExpanded ? "Read Less" : "Read More"}
//                       {isExpanded ? (
//                         <ChevronUp size={20} />
//                       ) : (
//                         <ChevronDown size={20} />
//                       )}
//                     </button>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Blog;

import { React, useEffect, useState } from "react";
import Navbar from "./Saadullah/Navbar.jsx";
import Footer from "./Saadullah/Footer";
import { get, ref } from "firebase/database";
import { database } from "../firebase.jsx";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { FileText, Calendar, User } from "lucide-react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  // NEW STATE: Tracks the *index* of the currently active blog
  const [selectedBlog, setSelectedBlog] = useState(0);

  useEffect(() => {
    const blogsRef = ref(database, "blogs");
    get(blogsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const rawData = snapshot.val();
          const formattedBlogs = rawData
            .filter((blog) => blog)
            .map((blog) => ({
              ...blog,
              icon: FileText, // We can still use this in the detail view
            }));
          setBlogs(formattedBlogs);
        } else {
          console.log("No data found at 'blogs' path");
        }
      })
      .catch((error) => {
        console.error("Firebase error:", error);
      });
  }, []);

  // Get the currently active blog object based on the selected index
  const activeBlog = blogs[selectedBlog];

  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Navbar />
      <section className="py-20 overflow-hidden bg-background">
        {/* Glows and Heading (Unchanged) */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-10 left-20 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-20 w-80 h-80 bg-highlight/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-heading">
              <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
                Latest Insights
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Exploring the frontiers of technology, one post at a time.
            </p>
          </motion.div>

          {/* --- ✅ NEW TWO-COLUMN UI --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* --- Column 1: Blog List --- */}
            {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 flex flex-col gap-4 lg:max-h-[70vh] lg:overflow-y-auto"
            > */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 flex flex-col gap-4"
            >
              {blogs.map((blog, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedBlog(index)}
                  className={`w-full p-5 rounded-lg border-2 text-left transition-all duration-300
                    ${
                      selectedBlog === index
                        ? "bg-background/80 backdrop-blur-md border-primary shadow-lg shadow-primary/20"
                        : "bg-background/30 border-border/50 hover:bg-background/50 hover:border-border"
                    }
                  `}
                >
                  <h4 className="text-lg font-bold text-heading mb-1">
                    {blog.title}
                  </h4>
                  <p className="text-sm text-muted">{blog.date}</p>
                </button>
              ))}
            </motion.div>

            {/* --- Column 2: Blog Content Viewer --- */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {activeBlog && (
                  <motion.div
                    // Use a unique key to trigger the animation on change
                    key={selectedBlog}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    // Re-using your original glass card styling
                    className="glass-effect p-8 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50"
                  >
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 bg-gradient-to-br ${
                        activeBlog.color || "from-primary to-secondary"
                      } rounded-xl mb-6 shadow-lg`}
                    >
                      <FileText className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold mb-3 text-heading">
                      {activeBlog.title}
                    </h3>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-purple-100 text-sm mb-6 italic">
                      <span className="flex items-center gap-2">
                        <User size={16} /> {activeBlog.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} /> {activeBlog.date}
                      </span>
                    </div>

                    {/* Full Content */}
                    <div className="text-gray-200 leading-relaxed space-y-4">
                      {activeBlog.summary && (
                        <p className="text-lg text-gray-100 italic border-l-4 border-primary pl-4">
                          {activeBlog.summary}
                        </p>
                      )}
                      {activeBlog.fullContent &&
                        activeBlog.fullContent.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
