import React, { useState } from "react";
import { Link } from "react-router"; // Imported Link
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated navItems to use 'to' for routing with react-router-dom
  const navItems = [
    { name: "Saad", to: "/" },
    { name: "Rauf", to: "/rauf" },
    { name: "Our Mission", to: "/mission" },
    { name: "Blogs", to: "/blog" },
    { name: "Contact Us", to: "/Contactus" },
  ];

  return (
    <nav className="w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo / Brand Name - now uses Link for navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="text-heading text-3xl font-extrabold bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent"
          ></Link>
        </motion.div>

        {/* Desktop Menu - now uses Link for navigation */}
        <div className="hidden md:flex items-center gap-10 ">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={item.to}
                className="text-text text-2xl font-lato hover:text-highlight transition-colors duration-300"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          {/* Contact Button - remains an 'a' tag for external links */}
          <a
            href="https://calendar.app.google/z5GZpzeNAPNfvqHE7"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-3 bg-gradient-to-r from-primary via-secondary to-highlight text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-secondary/40 transition-all duration-300 transform hover:scale-105"
          >
            Connect With Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text hover:text-highlight transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/90 border-t border-border backdrop-blur-lg"
          >
            <div className="flex flex-col items-center py-6 space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-text text-xl font-semibold hover:text-highlight transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="https://calendar.app.google/z5GZpzeNAPNfvqHE7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-highlight text-white rounded-full font-semibold shadow-lg shadow-primary/40 hover:shadow-secondary/50 transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
