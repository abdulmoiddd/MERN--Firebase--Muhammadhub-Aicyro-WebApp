import { useState, useEffect } from "react";
import { get, ref, push } from "firebase/database";
import { database } from "../../firebase.jsx"; // Assuming firebase config is in this path
import { motion } from "framer-motion";
import { Send, Linkedin, Twitter, Globe } from "lucide-react";
import toast from "react-hot-toast";

// Helper object to map icon names from the database to the imported components
const iconComponents = {
  Linkedin,
  Globe,
  Twitter,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const socialsRef = ref(database, "socials");
    get(socialsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const rawData = snapshot.val();
          const formattedSocials = rawData
            .filter((social) => social)
            .map((social) => ({
              ...social,
              icon: iconComponents[social.icon],
            }));
          setSocials(formattedSocials);
        } else {
          console.log("No data found at 'socials' path");
        }
      })
      .catch((error) => {
        console.error("Firebase error:", error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messagesRef = ref(database, "messages");
    // This 'push' is what triggers the Cloud Function on the backend
    push(messagesRef, {
      ...formData,
      timestamp: new Date().toISOString(),
    })
      .then(() => {
        toast.success("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.");
        console.error("Firebase error:", error);
      });
  };

  return (
    // Set main section background
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden bg-background"
    >
      {/* Subtle animated gradient background - Using theme colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-primary/10 to-background/30 -z-10 blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">
            {/* Heading Gradient - Using primary, secondary, highlight */}
            <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          {/* Subtext - Using muted color */}
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Have a project or idea? Let’s bring it to life together.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Card Styling - Use background/border/primary colors for hover
          className="relative group bg-background/50 backdrop-blur-md p-10 rounded-3xl border border-border/70 hover:border-primary/50 shadow-lg hover:shadow-primary/20 transition-all duration-500 max-w-3xl mx-auto hover:-translate-y-2"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl" />

          {/* Header icon - Using primary/secondary gradient */}
          <div className="relative inline-flex p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Send className="w-8 h-8 text-white" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label
                htmlFor="name"
                className="font-semibold block text-sm font-medium mb-2 text-muted"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                // Input styling - Theme colors used for background, border, and focus ring
                className="w-full px-4 py-3 bg-background/50 border border-border/70 text-text rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className=" font-semibold block text-sm font-medium mb-2 text-muted"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                // Input styling - Theme colors used for background, border, and focus ring
                className="w-full px-4 py-3 bg-background/50 border border-border/70 text-text rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className=" font-semibold block text-sm font-medium mb-2 text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                // Textarea styling - Theme colors used for background, border, and focus ring
                className="w-full px-4 py-3 bg-background/50 border border-border/70 text-text rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              // Button gradient and hover - Using primary/secondary/primaryHover
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primaryHover hover:to-secondary text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40"
            >
              Send Message
            </button>
          </form>

          {/* Socials */}
          <div className="mt-10 pt-8 border-t border-border/70 relative z-10">
            {/* Social text - Use muted color */}
            <p className="text-center text-muted mb-6">
              Or find me on social media
            </p>
            <div className="flex justify-center gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  // Social Link styling - Use background/border colors
                  className="p-3 bg-background/50 rounded-xl border border-border/70 hover:bg-background/80 transition-all duration-300"
                  aria-label={social.label}
                >
                  {/* Social Icon color - Use primary color */}
                  {social.icon && (
                    <social.icon className="w-6 h-6 text-primary" />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
