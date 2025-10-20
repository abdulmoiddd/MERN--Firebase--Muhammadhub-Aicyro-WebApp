// import React from "react";
// import Navbar from "./Saadullah/Navbar";
// import Footer from "./Saadullah/Footer";
// function Blog() {
//   return (
//     <div className="flex flex-col min-h-screen bg-background text-text">
//       <Navbar />

//       {/* Main content area */}
//       <main className="flex-grow flex items-center justify-center">
//         <div className="text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-heading">
//             This is a Blogs page
//           </h1>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default Blog;

// import React from "react";
// function Blog() {
//   return <div></div>;
// }

// export default Blog;

// import { React, useEffect, useState } from "react";
// import { get, ref } from "firebase/database";
// import { database } from "../firebase"; // Assuming firebase config is in this path
// import { motion } from "framer-motion";
// import { FileText } from "lucide-react"; // Changed icon to one suitable for blogs

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     // Fetch data from the "blogs" path in your Firebase database
//     const blogsRef = ref(database, "blogs");

//     get(blogsRef)
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const rawData = snapshot.val();

//           // Format the blog data, assuming it's an array in Firebase
//           const formattedBlogs = rawData
//             .filter((blog) => blog) // Removes any null entries
//             .map((blog) => ({
//               ...blog,
//               icon: FileText, // Assign a default icon for blog posts
//             }));

//           setBlogs(formattedBlogs);
//         } else {
//           console.log("No data found at 'blogs' path");
//         }
//       })
//       .catch((error) => {
//         console.error("Firebase error:", error);
//       });
//   }, []); // Empty dependency array ensures this runs only once on mount

//   return (
//     <section
//       id="blog" // Updated section ID
//       className="relative py-24 px-6 overflow-hidden bg-background"
//     >
//       {/* Decorative Glow Elements */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute -top-10 left-20 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
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
//             <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
//               Latest Insights
//             </span>
//           </h2>
//           <p className="text-muted text-lg max-w-2xl mx-auto">
//             Exploring the frontiers of technology, one post at a time.
//           </p>
//         </motion.div>

//         {/* Blog Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//               className="relative p-[2px] rounded-2xl bg-gradient-to-r from-primary to-highlight animate-gradient-x hover:shadow-lg hover:shadow-primary/40 transition-all duration-500"
//             >
//               {/* Inner Card */}
//               <div className="glass-effect h-full p-8 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50">
//                 {/* Icon */}
//                 <div
//                   className={`inline-flex p-4 bg-gradient-to-br ${
//                     blog.color || "from-primary to-secondary"
//                   } rounded-xl mb-6 transition-transform duration-300 shadow-lg`}
//                 >
//                   {blog.icon && <blog.icon className="w-8 h-8 text-white" />}
//                 </div>

//                 {/* Content */}
//                 {/* Blog Title */}
//                 <h3 className="text-2xl font-bold mb-2 text-heading">
//                   {blog.title}
//                 </h3>
//                 {/* Author & Date */}
//                 <div className="text-muted text-sm mb-4 italic">
//                   <span>By {blog.author}</span> | <span>{blog.date}</span>
//                 </div>
//                 {/* Summary */}
//                 <p className="text-text leading-relaxed">{blog.summary}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

// import { React, useEffect, useState } from "react";
// import { get, ref } from "firebase/database";
// import { database } from "../firebase.jsx";
// import { motion } from "framer-motion";
// import { FileText, ChevronDown, ChevronUp } from "lucide-react";

// // --- New Blog Post Data ---
// // For demonstration, we'll add your new blog post here.
// // You should move this data to your Firebase database.
// // const newBlogPost = {
// //   title: "The Aicyro Difference: Smart, Secure, and Scalable",
// //   author: "Muhammad Saadullah",
// //   date: "October 17, 2025",
// //   color: "from-primary to-secondary",
// //   summary:
// //     "In today’s digital landscape, businesses need more than just software; they need a strategic technology partner. At Aicyro Solutions, we build digital platforms designed to deliver measurable impact by focusing on three core pillars: intelligence, security, and scalability...",
// //   // We split the full content by newline for easier formatting
// //   fullContent: [
// //     "In today’s digital landscape, businesses need more than just software; they need a strategic technology partner. At Aicyro Solutions, we build digital platforms designed to deliver measurable impact by focusing on three core pillars: intelligence, security, and scalability. Formerly known as TekStream IO, we have become a global technology partner for startups, scaleups, and enterprises across the US, UK, Europe, and the GCC.",
// //     "Speed and Intelligence: The AI-Driven Advantage. We believe that speed to market is a critical advantage. That’s why we’ve honed a process that allows us to launch robust SaaS MVPs in as little as 30-45 days. A recent highlight includes building and launching a Dubai startup's MVP in just 40 days. However, speed without intelligence is a missed opportunity. Our approach is AI-driven, integrating technologies like LLM-powered automation and predictive analytics where they create tangible business value. Led by our CEO, Muhammad Saadullah, an AI/ML Engineer with past experience leading AI initiatives at Salesforce, we have a proven track record. Our projects include developing ArtMorph, a real-time AI video style transfer API , and deploying AI automation that successfully reduced a client's support hours by 60%.",
// //     "Security-First: Our Unshakeable Foundation. For us, security is not an afterthought—it's the foundation of everything we build. We lead with a security-first mindset, embedding penetration testing, AI-driven threat detection, and compliance-ready frameworks into our development lifecycle. Under the leadership of our CEO, M. Rauf, a cybersecurity expert with over 200 projects delivered , our teams specialize in penetration testing, ethical hacking, and red teaming. We design products that are secure by design, helping startups pass critical SOC2 & ISO audits and protecting enterprises in finance, healthcare, and SaaS. Our expertise ensures your platform is compliant with standards like SOC2, ISO 27001, HIPAA, and GDPR.",
// //     "Scalability: Built for Tomorrow's Growth. A solution that can’t grow with your business is a liability. We ensure your platform is built for the future by leveraging cloud-native architectures on AWS, GCP, and Azure. Using modern practices like CI/CD, microservices, and Kubernetes, we engineer platforms that stand the test of scale. With over 100+ successful projects delivered worldwide, our mission is to empower businesses to innovate faster, safer, and smarter. Whether you are launching an MVP, securing an enterprise platform, or integrating AI, Aicyro Solutions is your dedicated partner in digital transformation.",
// //   ],
// // };

// const Blog = () => {
//   // const [blogs, setBlogs] = useState([newBlogPost]); // Initializing with your new post
//   const [expandedBlogs, setExpandedBlogs] = useState({}); // State to track expanded cards

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

//           // Combine hardcoded post with Firebase posts (ensuring no duplicates)
//           setBlogs((prevBlogs) => [...prevBlogs, ...formattedBlogs]);
//         } else {
//           console.log("No data found at 'blogs' path");
//         }
//       })
//       .catch((error) => {
//         console.error("Firebase error:", error);
//       });
//   }, []);

//   // Function to toggle the expanded state for a specific blog post
//   const toggleReadMore = (index) => {
//     setExpandedBlogs((prev) => ({
//       ...prev,
//       [index]: !prev[index], // Toggle the boolean value for the given index
//     }));
//   };

//   return (
//     <section
//       id="blog"
//       className="relative py-24 px-6 overflow-hidden bg-background"
//     >
//       {/* Glows and Heading are the same */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute -top-10 left-20 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-20 w-80 h-80 bg-highlight/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
//       </div>
//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-heading">
//             <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
//               Latest Insights
//             </span>
//           </h2>
//           <p className="text-muted text-lg max-w-2xl mx-auto">
//             Exploring the frontiers of technology, one post at a time.
//           </p>
//         </motion.div>

//         {/* Blog Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog, index) => {
//             const isExpanded = expandedBlogs[index];
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2, duration: 0.6 }}
//                 className="relative p-[2px] rounded-2xl bg-gradient-to-r from-primary to-highlight animate-gradient-x hover:shadow-lg hover:shadow-primary/40 transition-all duration-500"
//               >
//                 <div className="glass-effect h-full flex flex-col p-8 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50">
//                   <div className="flex-grow">
//                     <div
//                       className={`inline-flex p-4 bg-gradient-to-br ${blog.color} rounded-xl mb-6 shadow-lg`}
//                     >
//                       <FileText className="w-8 h-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-2 text-heading">
//                       {blog.title}
//                     </h3>
//                     <div className="text-muted text-sm mb-4 italic">
//                       <span>By {blog.author}</span> | <span>{blog.date}</span>
//                     </div>

//                     {/* --- CONDITIONAL CONTENT DISPLAY --- */}
//                     <div className="text-text leading-relaxed">
//                       {isExpanded ? (
//                         blog.fullContent.map((paragraph, pIndex) => (
//                           <p key={pIndex} className="mb-4">
//                             {paragraph}
//                           </p>
//                         ))
//                       ) : (
//                         <p>{blog.summary}</p>
//                       )}
//                     </div>
//                   </div>

//                   {/* --- READ MORE BUTTON --- */}
//                   <button
//                     onClick={() => toggleReadMore(index)}
//                     className="flex items-center gap-2 mt-6 text-highlight font-semibold hover:text-primary transition-colors duration-300 self-start"
//                   >
//                     {isExpanded ? "Read Less" : "Read More"}
//                     {isExpanded ? (
//                       <ChevronUp size={20} />
//                     ) : (
//                       <ChevronDown size={20} />
//                     )}
//                   </button>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

// import { React, useEffect, useState } from "react";
// import { get, ref } from "firebase/database";
// import { database } from "../firebase.jsx";
// import { motion } from "framer-motion";
// import { FileText, ChevronDown, ChevronUp } from "lucide-react";

// const newBlogPost = {
//   // ... (your blog post data can stay here for testing or be removed if it's in Firebase)
// };

// const Blog = () => {
//   // 1. Your state variable is correctly named 'blogs' (plural) here.
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
//     <section
//       id="blog"
//       className="relative py-24 px-6 overflow-hidden bg-background"
//     >
//       {/* Glows and Heading */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute -top-10 left-20 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-20 w-80 h-80 bg-highlight/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
//       </div>
//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-heading">
//             <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
//               Latest Insights
//             </span>
//           </h2>
//           <p className="text-muted text-lg max-w-2xl mx-auto">
//             Exploring the frontiers of technology, one post at a time.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* 2. ✅ THE FIX: Ensure you are mapping over 'blogs' (plural) here. */}
//           {blogs.map((blog, index) => {
//             const isExpanded = expandedBlogs[index];
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2, duration: 0.6 }}
//                 className="relative p-[2px] rounded-2xl bg-gradient-to-r from-primary to-highlight animate-gradient-x hover:shadow-lg hover:shadow-primary/40 transition-all duration-500"
//               >
//                 <div className="glass-effect h-full flex flex-col p-8 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50">
//                   <div className="flex-grow">
//                     <div
//                       className={`inline-flex p-4 bg-gradient-to-br ${
//                         blog.color || "from-primary to-secondary"
//                       } rounded-xl mb-6 shadow-lg`}
//                     >
//                       <FileText className="w-8 h-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-2 text-heading">
//                       {blog.title}
//                     </h3>
//                     <div className="text-muted text-sm mb-4 italic">
//                       <span>By {blog.author}</span> | <span>{blog.date}</span>
//                     </div>

//                     <div className="text-text leading-relaxed">
//                       {isExpanded ? (
//                         blog.fullContent &&
//                         blog.fullContent.map((paragraph, pIndex) => (
//                           <p key={pIndex} className="mb-4">
//                             {paragraph}
//                           </p>
//                         ))
//                       ) : (
//                         <p>{blog.summary}</p>
//                       )}
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => toggleReadMore(index)}
//                     className="flex items-center gap-2 mt-6 text-highlight font-semibold hover:text-primary transition-colors duration-300 self-start"
//                   >
//                     {isExpanded ? "Read Less" : "Read More"}
//                     {isExpanded ? (
//                       <ChevronUp size={20} />
//                     ) : (
//                       <ChevronDown size={20} />
//                     )}
//                   </button>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;
import { React, useEffect, useState } from "react";
import Navbar from "./Saadullah/Navbar.jsx";
import Footer from "./Saadullah/Footer";
import { get, ref } from "firebase/database";
import { database } from "../firebase.jsx";
import { motion } from "framer-motion";
import { FileText, ChevronDown, ChevronUp } from "lucide-react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});

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
              icon: FileText,
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

  const toggleReadMore = (index) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Navbar />
      <section
        // id="blog"
        // className="relative py-24 px-6 overflow-hidden bg-background"
        className="py-20 overflow-hidden bg-background"
      >
        {/* Glows and Heading */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-10 left-20 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-20 w-80 h-80 bg-highlight/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
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

          {/* ✅ THE CHANGE IS HERE */}
          <div className="grid grid-cols-1 gap-8">
            {blogs.map((blog, index) => {
              const isExpanded = expandedBlogs[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative p-[2px] rounded-2xl bg-gradient-to-r from-primary to-highlight animate-gradient-x hover:shadow-lg hover:shadow-primary/40 transition-all duration-500"
                >
                  <div className="glass-effect h-full flex flex-col p-8 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50">
                    <div className="flex-grow">
                      <div
                        className={`inline-flex p-4 bg-gradient-to-br ${
                          blog.color || "from-primary to-secondary"
                        } rounded-xl mb-6 shadow-lg`}
                      >
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-heading">
                        {blog.title}
                      </h3>
                      <div className="text-purple-100 text-sm mb-4 italic">
                        <span>By {blog.author}</span> | <span>{blog.date}</span>
                      </div>

                      <div className="text-gray-200 leading-relaxed">
                        {isExpanded ? (
                          blog.fullContent &&
                          blog.fullContent.map((paragraph, pIndex) => (
                            <p key={pIndex} className="mb-4">
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p>{blog.summary}</p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => toggleReadMore(index)}
                      className="flex items-center gap-2 mt-6 text-gray-300 font-semibold hover:text-primary transition-colors duration-300 self-start"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                      {isExpanded ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
