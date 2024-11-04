"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Plan {
  name: string;
  description: string;
  price: string;
  features: string[];
}

const PriceCard: React.FC<{
  plan: Plan;
  isPopular: boolean;
  index: number;
}> = ({ plan, isPopular, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2 + i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -10 }}
      className={`bg-white rounded-2xl p-8 transform-gpu ${
        isPopular
          ? "ring-2 ring-[#377DFF] relative shadow-xl"
          : "border border-gray-100 shadow-lg hover:shadow-xl"
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#377DFF] to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium"
        >
          Recomandat
        </motion.span>
      )}

      {/* Plan Header */}
      <motion.div className="text-center mb-8">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="text-xl font-bold text-[#2D3436] mb-4"
        >
          {plan.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.4 }}
          className="text-gray-600 mb-6"
        >
          {plan.description}
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="flex items-center justify-center"
        >
          <span className="text-4xl font-bold bg-gradient-to-r from-[#2D3436] to-[#377DFF] bg-clip-text text-transparent">
            {plan.price}
          </span>
          <span className="text-gray-500 ml-2">MDL/lună</span>
        </motion.div>
      </motion.div>

      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, i) => (
          <motion.li
            key={i}
            custom={i}
            variants={featureVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex items-center"
          >
            <motion.svg
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="w-5 h-5 text-green-500 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
            <span className="text-gray-600">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-4 rounded-xl font-medium transition-all ${
          isPopular
            ? "bg-gradient-to-r from-[#377DFF] to-blue-600 text-white hover:shadow-lg"
            : "bg-gray-50 text-[#2D3436] hover:bg-gray-100"
        }`}
      >
        Alege Pachetul
      </motion.button>
    </motion.div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const plans = [
    {
      name: "Basic",
      description: "Perfect pentru pregătire individuală",
      price: isAnnual ? "600" : "700",
      features: [
        "Acces la platforma online",
        "Materiale de studiu digitale",
        "2 simulări BAC/lună",
        "Forum de întrebări",
        "Teste de autoevaluare",
        "Suport prin email",
      ],
    },
    {
      name: "Premium",
      description: "Recomandat pentru rezultate maxime",
      price: isAnnual ? "1000" : "1200",
      features: [
        "Toate beneficiile Basic",
        "Lecții 1-la-1 săptămânale",
        "4 simulări BAC/lună",
        "Feedback personalizat",
        "Consultații video",
        "Suport 24/7",
        "Garanția promovării",
      ],
    },
    {
      name: "Grup",
      description: "Ideal pentru învățare colaborativă",
      price: isAnnual ? "800" : "900",
      features: [
        "Toate beneficiile Basic",
        "Lecții în grup (4-6 elevi)",
        "3 simulări BAC/lună",
        "Proiecte de grup",
        "Sesiuni de întrebări",
        "Suport prin chat",
        "Materiale printate",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm mb-6"
          >
            <span className="bg-gradient-to-r from-[#377DFF] to-blue-600 text-white px-3 py-1 rounded-full text-sm">
              Prețuri
            </span>
            <span className="ml-2 text-sm text-gray-600">
              Pachete Flexibile
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold bg-gradient-to-r from-[#2D3436] to-[#377DFF] bg-clip-text text-transparent mb-6"
          >
            Alege Planul Potrivit pentru Tine
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg mb-8"
          >
            Oferim pachete adaptate nevoilor și obiectivelor tale de învățare
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <span
              className={`text-sm ${
                !isAnnual ? "text-[#2D3436] font-medium" : "text-gray-500"
              }`}
            >
              Plată Lunară
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                isAnnual ? "bg-[#377DFF]" : "bg-gray-200"
              }`}
            >
              <motion.span
                layout
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span
              className={`text-sm ${
                isAnnual ? "text-[#2D3436] font-medium" : "text-gray-500"
              }`}
            >
              Plată Anuală (-15%)
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AnimatePresence>
            {plans.map((plan, index) => (
              <PriceCard
                key={index}
                plan={plan}
                isPopular={index === 1}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Ai nevoie de un plan personalizat?
          </p>
          <motion.button
            whileHover={{ x: 10 }}
            className="inline-flex items-center text-[#377DFF] font-medium hover:underline"
          >
            <span>Contactează-ne pentru o ofertă specială</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
