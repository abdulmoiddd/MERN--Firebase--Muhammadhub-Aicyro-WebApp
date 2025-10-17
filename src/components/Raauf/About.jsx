import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ref, onValue } from "firebase/database";
// IMPORTANT: The path to your firebase config file might be different.
// Please adjust the path below to match your project structure.
import { database } from "../../firebase";
import { ShieldCheck, BrainCircuit, FileLock2 } from "lucide-react";

// Helper component to render icons based on their name from the database
const Icon = ({ name }) => {
  switch (name) {
    case "ShieldCheck":
      return <ShieldCheck className="w-6 h-6 text-white" />;
    case "BrainCircuit":
      return <BrainCircuit className="w-6 h-6 text-white" />;
    case "FileLock2":
      return <FileLock2 className="w-6 h-6 text-white" />;
    default:
      return null;
  }
};

const AboutRauf = () => {
  // State to hold the stats fetched from Firebase
  const [developerStats, setDeveloperStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reference to the 'aboutRauf' node in your Realtime Database
    const statsRef = ref(database, "aboutRauf");

    // Attach a listener to fetch the data
    const unsubscribe = onValue(
      statsRef,
      (snapshot) => {
        try {
          const data = snapshot.val();
          if (data) {
            // Filter out any null values from the database array
            const filteredData = data.filter((item) => item !== null);
            setDeveloperStats(filteredData);
          } else {
            setError("No data found for this developer.");
          }
        } catch (err) {
          console.error("Error processing data from Firebase:", err);
          setError("Failed to process data.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error("Firebase read failed: ", error);
        setError("Failed to fetch data from Firebase.");
        setLoading(false);
      }
    );

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <section
      id="about-rauf"
      className="relative py-24 px-6 overflow-hidden bg-background text-text"
    >
      {/* Background glow effect - Consistent with the original design */}
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
            {/* Gradient for Heading - Using the same color scheme */}
            <span className="bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(108,99,255,0.3)]">
              Meet The Security Leader
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Securing digital ecosystems where {/* Highlighted keywords */}
            <span className="text-highlight font-semibold">
              Innovation
            </span>,{" "}
            <span className="text-primary font-semibold">Resilience</span>, and{" "}
            <span className="text-secondary font-semibold">Trust</span>{" "}
            converge.
          </p>
        </motion.div>

        {/* --- UI Change: Swapped Layout --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Section - Stats (Previously on the Right) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Animate from the left
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8"
          >
            {loading && (
              <p className="text-center text-muted">Loading stats...</p>
            )}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading &&
              !error &&
              developerStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  // Stat Card Styling - Consistent but with subtle tweaks
                  className="p-6 rounded-2xl bg-gradient-to-br from-background/50 to-secondary/10 border border-border backdrop-blur-md shadow-md hover:border-highlight/60 hover:scale-[1.03] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-5">
                    {/* --- UI Change: Circular Icon Background --- */}
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon name={stat.icon} />
                    </div>
                    <div>
                      {/* Value text: Consistent gradient */}
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

          {/* Right Section - About Text (Previously on the Left) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Animate from the right
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-text text-lg leading-relaxed">
              As the{" "}
              <span className="text-primary font-semibold">
                Founder & Cybersecurity Expert
              </span>{" "}
              at{" "}
              <span className="text-highlight font-semibold">
                Aicyro Solutions
              </span>
              , <span className="text-highlight font-semibold">M. Rauf</span>{" "}
              helps businesses secure their digital ecosystems before attackers
              can strike.
            </p>

            <p className="text-text text-lg leading-relaxed">
              He specializes in penetration testing, ethical hacking, and
              AI-driven threat detection to protect startups, fintechs, and
              enterprises worldwide.
            </p>

            {/* Vision Card - A variation of the 'Mission' card */}
            <div className="relative group rounded-2xl border border-border/70 bg-gradient-to-br from-background via-transparent to-primary/10 backdrop-blur-md p-6 shadow-lg transition-all duration-500 hover:shadow-primary/30 hover:scale-[1.02]">
              <p className="text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                My Philosophy
              </p>
              <p className="text-muted italic leading-relaxed">
                To create technology solutions that are not just functional, but
                resilient against evolving cyber threats, ensuring every product
                thrives with bulletproof security.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutRauf;
