"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
      className="bg-white p-8 rounded-2xl border border-gray-100 transform-gpu"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
        className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6"
      >
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          {icon}
        </motion.div>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
        className="text-xl font-bold text-[#2D3436] mb-4"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
        className="text-gray-600 leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#377DFF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Pregătire Individuală",
      description:
        "Lecții personalizate one-on-one cu profesori experimentați, adaptate la nevoile și ritmul tău de învățare.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#377DFF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Cursuri în Grup",
      description:
        "Sesiuni interactive în grupuri mici pentru o învățare colaborativă și schimb de experiență între elevi, în grupe fizice și online",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#377DFF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Cursuri structurate și practice",
      description:
        "​Vei recapitula 100% din temele incluse în programele de BAC și examenul de a 9-a aprobate de Ministerul Educației. Vei dezvolta abilități practice pentru a obține punctajul maximal conform baremului oficial. ",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#377DFF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      title: "Simulări BAC",
      description:
        "Teste regulate în condiții de examen pentru evaluarea progresului și familiarizarea cu formatul oficial.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#377DFF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Materiale adiționale asigurate",
      description:
        "Beneficiezi de acces gratuit la teste rezolvate, culegeri de probleme, rezumate, scheme, tabele, formule și orele înregistrate din curs pentru a asimila mai ușor temele predate la lecții. ",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#377DFF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
      title: "Rapoarte Progress",
      description:
        "Monitorizare constantă a evoluției cu rapoarte detaliate și feedback personalizat pentru îmbunătățire.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="max-w-2xl mx-auto text-center mb-16 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isHeaderInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm mb-6"
          >
            <span className="bg-[#377DFF] text-white px-3 py-1 rounded-full text-sm">
              Servicii
            </span>
            <span className="ml-2 text-sm text-gray-600">
              Pregătire Completă pentru BAC
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-[#2D3436] mb-6 bg-gradient-to-r from-[#2D3436] to-[#377DFF] bg-clip-text text-transparent"
          >
            Tot ce ai nevoie pentru succesul la BAC
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            Oferim o gamă completă de servicii de pregătire, adaptate nevoilor
            tale specifice pentru a-ți asigura succesul la examenul de
            bacalaureat.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
