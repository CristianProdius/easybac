"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopGContactForm from "../shared/topGContactForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add smooth scroll handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  const navItems = [
    { title: "Despre Noi", href: "#about" },
    { title: "Cursuri", href: "#services" },
    { title: "Testimoniale", href: "#testimonials" },
    { title: "Contacte", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-white/90 backdrop-blur-md shadow-lg"
            : "py-6 bg-white"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div variants={itemVariants} className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#377DFF] to-blue-600 text-transparent bg-clip-text">
                Easy BAC.md
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-600 hover:text-[#377DFF] font-medium transition-colors relative group cursor-pointer"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#377DFF] transition-all group-hover:w-full" />
                </motion.a>
              ))}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactForm(true)}
                className="bg-[#377DFF] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
              >
                Începe Acum
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-[#377DFF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block text-gray-600 hover:text-[#377DFF] font-medium transition-colors cursor-pointer"
                    >
                      {item.title}
                    </motion.a>
                  ))}
                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowContactForm(true)}
                    className="w-full bg-[#377DFF] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md"
                  >
                    Începe Acum
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      {/* Add the ContactForm component */}
      <TopGContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </>
  );
};

export default Navbar;
