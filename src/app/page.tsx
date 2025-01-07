"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/shared/ContactForm";
import Footer from "@/components/layout/Footer";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#377DFF] to-[#2563EB] flex items-center justify-center z-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        y: "-100%",
        opacity: 0,
        transition: { 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1],
          opacity: { duration: 0.5 }
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.7, 1.1, 1, 0.95],
          rotate: [-10, 0, 0, 5],
        }}
        transition={{
          duration: 2.4,
          times: [0, 0.4, 0.8, 1],
          ease: "easeInOut",
        }}
        className="relative w-48 h-48 flex items-center justify-center"
      >
        <motion.img
          src="/easybac.svg"
          alt="Logo"
          className="w-full h-full object-contain filter brightness-0 invert"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};


export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true");
        setShowContent(true);
      }, 2400);

      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {showContent && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white"
        >
          <Header />
          <Hero />
          <section id="about">
            <Services />
          </section>
          <section id="services">
            <Pricing />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <Team />
          <FAQ />
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </motion.main>
      )}
    </>
  );
}