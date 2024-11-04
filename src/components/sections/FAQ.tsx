"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-0"
    >
      <motion.button
        className="w-full py-6 flex justify-between items-center text-left group"
        onClick={onClick}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg font-semibold text-[#2D3436] pr-8 group-hover:text-[#377DFF] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-50 rounded-full p-2"
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className="text-gray-600 leading-relaxed pb-6 pr-12"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const faqs = [
    {
      question: "Cum se desfășoară lecțiile de pregătire pentru BAC?",
      answer:
        "Lecțiile se desfășoară atât online cât și fizic, în funcție de preferințele tale. Programul este flexibil și adaptabil, cu sesiuni individuale sau în grup mic. Fiecare lecție durează 90 de minute și include teorie, exerciții practice și simulări de examen.",
    },
    {
      question: "Care este rata de promovare a elevilor pregătiți de voi?",
      answer:
        "Suntem mândri să avem o rată de promovare de peste 98% în ultimii 5 ani. Mai mult, peste 75% dintre elevii noștri obțin note peste 8 la examenul de bacalaureat, datorită metodologiei noastre structurate și atenției personalizate.",
    },
    {
      question: "Cât timp înainte de BAC ar trebui să încep pregătirea?",
      answer:
        "Recomandăm începerea pregătirii cu cel puțin 6 luni înainte de examen pentru rezultate optime. Acest interval permite acoperirea completă a materiei, rezolvarea multiplelor teste și simulări, precum și perfecționarea tehnicilor de rezolvare.",
    },
    {
      question: "Cum mă pot înscrie la cursurile de pregătire?",
      answer:
        "Înscrierea se poate face online prin intermediul platformei noastre sau direct la sediul nostru. După completarea formularului, vei fi contactat pentru o evaluare inițială gratuită și stabilirea planului personalizat de pregătire.",
    },
    {
      question: "Oferiti materiale de studiu suplimentare?",
      answer:
        "Da, toți elevii înscriși primesc acces la platforma noastră online cu materiale digitale, teste, videouri explicative și resurse suplimentare. În plus, oferim culegeri și materiale tipărite pentru studiu individual.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isHeaderInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm mb-6"
          >
            <span className="bg-gradient-to-r from-[#377DFF] to-blue-600 text-white px-3 py-1 rounded-full text-sm">
              FAQ
            </span>
            <span className="ml-2 text-sm text-gray-600">
              Întrebări Frecvente
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
            Ai Întrebări? Suntem Aici să Ajutăm
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            Găsește răspunsuri la cele mai frecvente întrebări despre programele
            noastre de pregătire pentru BAC
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Nu ți-ai găsit răspunsul la întrebare?
          </p>
          <motion.button
            whileHover={{ x: 10 }}
            className="inline-flex items-center text-[#377DFF] font-medium group"
          >
            <span className="group-hover:underline">
              Contactează-ne pentru mai multe detalii
            </span>
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
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQ;
