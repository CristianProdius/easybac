"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-[#F8FAFF] to-white overflow-hidden">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm"
            >
              <span className="bg-[#377DFF] text-white px-3 py-1 rounded-full text-sm">
                Nou
              </span>
              <span className="ml-2 text-sm text-gray-600">
                Program actualizat 2025
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-[#2D3436] leading-tight"
            >
              Pregătire pentru BAC cu rezultate garantate
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-gray-600">
              Fii gata de BAC, examenul de a 9-a, tezele semestriale și
              sesiunile la facultate cu cei mai dedicați mentori și profesori
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#377DFF] text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                Începe Gratuit
              </motion.button>
              {/*<motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm3.707 10.293l-4-4a1 1 0 00-1.414 1.414L11.586 11H6a1 1 0 100 2h5.586l-3.293 3.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414z" />
                </svg>
                Vezi Cum Funcționează
              </motion.button>*/}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={statsVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: "1500+", text: "Elevi pregătiți" },
                { number: "98%", text: "Rata de promovare" },
                { number: "8.5+", text: "Nota medie" },
              ].map((stat, index) => (
                <motion.div key={index} variants={statItemVariants}>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-3xl font-bold text-[#2D3436]"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600">{stat.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div className="relative" variants={imageVariants}>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-10 -left-10 w-20 h-20 bg-blue-50 rounded-full"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-50 rounded-full"
            />
            <motion.img
              src="/images/student-studying.png"
              alt="Student studying"
              className="relative z-10 w-full rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
