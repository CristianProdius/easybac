"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TopGContactForm from "../shared/topGContactForm";

interface Student {
  name: string;
  grade: string;
  image: string;
  testimonial: string;
}

{
  /* 
const StarRating = () => {
  return (
    <div className="flex mb-6">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
};*/
}

const TestimonialCard = ({
  student,
  index,
}: {
  student: Student;
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-50 rounded-tr-full opacity-50" />

      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 bg-[#377DFF] rounded-full p-3 shadow-lg">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Star Rating */}
      <div className="flex justify-center mb-6">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="w-5 h-5 text-yellow-400 mx-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        className="text-gray-600 mb-8 leading-relaxed relative z-10 text-center"
      >
        &quot;{student.testimonial}&quot;
      </motion.p>

      {/* Student Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        className="flex items-center justify-center relative z-10"
      >
        <div className="flex flex-col items-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={student.image}
            alt={student.name}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-[#377DFF]/20 mb-3"
          />
          <div className="text-center">
            <h4 className="font-semibold text-[#2D3436] mb-1">
              {student.name}
            </h4>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600">
              <span className="text-sm font-medium">
                Nota BAC: {student.grade}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatItem = ({
  number,
  text,
  index,
}: {
  number: string;
  text: string;
  index: number;
}) => {
  const statRef = useRef(null);
  const isInView = useInView(statRef, { once: true });

  return (
    <motion.div
      ref={statRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <motion.h3
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="text-4xl font-bold bg-gradient-to-r from-[#377DFF] to-blue-600 text-transparent bg-clip-text mb-2"
      >
        {number}
      </motion.h3>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
};

const Testimonials = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const testimonials = [
    {
      name: "Alexandru Vîzdoagă",
      grade: "9.85",
      image: "/students/1.png",
      testimonial:
        "Frecventând cursurile de limba si literatura romana, vă pot spune că EasyBac este o resursă excelentă pentru elevii care își doresc să-și consolideze cunoștințele de limba și literatura română și să se pregătească mai bine pentru examenul de bacalaureat. Cursurile sunt concepute astfel încât să acopere întregul program și să ofere elevilor ocazia de a înțelege mai bine subiectele și de a-și dezvolta abilitățile de analiză și interpretare. Profesoara Cernavca Olga are un fel anume de a explica temele pentru fiecare să înțeleagă. Recomand!",
    },
    {
      name: "Vlada Comendant",
      grade: "9.60",
      image: "/students/2.png",
      testimonial:
        "Recomand cu cea mai mare incredere!! Cu ajutorul cursurilor de istorie predat de Dionis am reusit intr-un timp foarte scurt sa ma pregatesc foarte bine pentru bac pentru o nota buna, lectiile de la curs mi-au dat ceea ce nu am putut primi la liceu in toti anii de invatamant. Pe langa faptul ca acumulati cunostinte pentru sustinerea unui examen semnificativ, ele va vor ajuta si in viata cotidiana.",
    },
    {
      name: "Adelina Caramanuța",
      grade: "9.90",
      image: "/students/3.png",
      testimonial:
        "Recomand cu cea mai mare incredere EasyBac! sunt o echipa foarte organizata și responsabila. Datorita lor avem încredere în puterile noastre☀️lectiile sunt foarte atractive si interesante iar mentorii ne susțin în toate si ne motiveaza 😊 La engleza avem oportunitatea de a ne întari cunoștințele si sunt sigura ca rezultatele vor fi frumoase datorita Alinei Țurcanu. Mulțumim EasyBac",
    },
    {
      name: "Olea Creciun",
      grade: "9.50",
      image: "/students/4.png",
      testimonial:
        "As vrea sa spun părerea mea despre învățătorul Dionis Smoleac, acest învățător este 10/10, Dumnealui chiar poate sa atragă și sa motiveze sa înveți, la lecțiile Dumnealui am o plăcere sa vin și am o plăcere sa îl ascult și este foarte rar de întâlnit așa profesori și cel mai important după lecțiile acestui învățător am început chiar sa înțeleg bine istoria",
    },
    {
      name: "Renat Elas",
      grade: "9.47",
      image: "/students/5.png",
      testimonial:
        "Mulțumesc EasyBac și în special profesorilor la disciplinele de geografie (Roxana), matematica (Alina) , limba și literatura română (Ion), cu ajutorul dumneavoastră mă pot descurca cu ușurință la disciplinele date. Profesorii sunt bine pregătiți și cel mai important foarte răbdători.",
    },
    {
      name: "Mădălina Filimon",
      grade: "9.50",
      image: "/students/6.png",
      testimonial:
        "Materiale de învățare adaptate la nevoile elevilor - Easy Bac poate oferi cursuri personalizate în funcție de nivelul de cunoștințe și stilul de învățare al elevilor. Recomand cu toată încredere, în special cursul de matematica și biologie, care te ajuta sa însușești bine materialul,abordare individuala și multe exerciții practice. Mulțumesc Danielei și Irinei!",
    },
  ];

  const stats = [
    { number: "98%", text: "Rată de promovare" },
    { number: "1500+", text: "Elevi pregătiți" },
    { number: "8.5", text: "Nota medie BAC" },
    { number: "5+", text: "Ani de experiență" },
  ];

  const [showContactForm, setShowContactForm] = useState(false);
  const selectedCourse = ""; // Define the selectedCourse variable

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
                Testimoniale
              </span>
              <span className="ml-2 text-sm text-gray-600">
                Rezultate Dovedite
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold bg-gradient-to-r from-[#2D3436] to-[#377DFF] bg-clip-text text-transparent mb-6"
            >
              Ce Spun Elevii Noștri
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 text-lg"
            >
              Descoperă experiențele elevilor care și-au îndeplinit obiectivele
              prin intermediul programelor noastre de pregătire
            </motion.p>
          </motion.div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                number={stat.number}
                text={stat.text}
                index={index}
              />
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                student={testimonial}
                index={index}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContactForm(true)}
              className="bg-[#377DFF] text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Începe Pregătirea
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
      <TopGContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        preselectedCourse={selectedCourse}
      />
    </>
  );
};

export default Testimonials;
