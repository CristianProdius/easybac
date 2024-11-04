"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
  index: number;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  link,
  linkText,
  index,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6"
      >
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          {icon}
        </motion.div>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        className="text-xl font-bold bg-gradient-to-r from-[#2D3436] to-[#377DFF] bg-clip-text text-transparent mb-3"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
        className="text-gray-600 mb-4"
      >
        {description}
      </motion.p>
      <motion.a
        href={link}
        whileHover={{ x: 10 }}
        className="inline-flex items-center text-[#377DFF] font-medium group"
      >
        <span className="group-hover:underline">{linkText}</span>
        <motion.svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ x: 0 }}
          whileHover={{ x: 5 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </motion.svg>
      </motion.a>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });
  const ctaRef = useRef(null);
  const isCTAInView = useInView(ctaRef, { once: true });

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 hover:border-blue-300";

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main CTA Box */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isCTAInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="bg-gradient-to-r from-[#377DFF] to-blue-700 rounded-3xl p-12 mb-20 shadow-xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCTAInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Pregătește-te pentru BAC cu cei mai buni
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCTAInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.3 }}
              className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
            >
              Alătură-te celor peste 1000 de elevi care au obținut note
              excelente la BAC prin intermediul programelor noastre de
              pregătire.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCTAInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-lg"
              >
                Începe Gratuit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                Programează Consultație
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <ContactCard
            icon={
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            title="Email"
            description="Trimite-ne un email și îți vom răspunde în cel mai scurt timp posibil."
            link="mailto:contact@bac.md"
            linkText="contact@easybac.md"
            index={0}
          />
          <ContactCard
            icon={
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            }
            title="Telefon"
            description="Suntem disponibili pentru a răspunde la întrebările tale."
            link="tel:+37312345678"
            linkText="+373 505 94 047"
            index={0}
          />
          <ContactCard
            icon={
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
            title="Locație"
            description="Vino să ne vizitezi la sediul nostru din Chișinău."
            link="#"
            linkText="Vezi pe hartă"
            index={0}
          />
        </div>

        {/* Contact Form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={
                isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold bg-gradient-to-r from-[#2D3436] to-[#377DFF] bg-clip-text text-transparent mb-6 text-center"
            >
              Trimite-ne un mesaj
            </motion.h3>
            <motion.form
              initial={{ opacity: 0 }}
              animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nume
                  </label>
                  <input
                    type="text"
                    className={inputClasses}
                    placeholder="Numele tău"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className={inputClasses}
                    placeholder="email@exemplu.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subiect
                </label>
                <input
                  type="text"
                  className={inputClasses}
                  placeholder="Subiectul mesajului"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj
                </label>
                <textarea
                  className={`${inputClasses} h-32 resize-none`}
                  placeholder="Scrie mesajul tău aici..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#377DFF] to-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Trimite Mesajul
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
