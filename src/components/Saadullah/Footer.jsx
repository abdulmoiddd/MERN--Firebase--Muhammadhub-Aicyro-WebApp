import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    // Set background to a slight overlay/darker background and use the border color
    <footer className="py-8 px-4 border-t border-border bg-background/50">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        {/* Main Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          // Text color set to 'muted'
          className="text-muted flex flex-wrap items-center justify-center gap-2 text-sm md:text-base"
        >
          <span>Built with</span>
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Heart Icon: Use the highlight color for a vibrant accent */}
            <Heart className="w-4 h-4 text-highlight fill-highlight animate-pulse" />
          </motion.span>
          <span>
            by {/* Name Gradient - Using primary/secondary/highlight */}
            <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent font-semibold">
              Muhammad Saadullah
            </span>
            , CEO{" "}
            {/* Company Name - Using heading color and hover primary color */}
            <span className="text-heading font-medium hover:text-primary transition-colors">
              Aicyro Solutions
            </span>
          </span>
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          // Subtext color set to 'muted'
          className="text-muted text-sm tracking-wide"
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.p>

        {/* Decorative glow line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "5rem" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          // Glow line gradient using core theme colors
          className="mx-auto h-[2px] bg-gradient-to-r from-primary via-secondary to-highlight rounded-full opacity-70"
        />
      </div>
    </footer>
  );
};

export default Footer;
