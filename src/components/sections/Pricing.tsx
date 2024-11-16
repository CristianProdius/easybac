"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import TopGContactForm from "../shared/topGContactForm";

interface Course {
  name: string;
  description: string;
  lessons: number | (number | string)[];
  icon: string;
}

const CourseCard = ({
  course,
  index,
  onCourseSelect,
}: {
  course: Course;
  index: number;
  onCourseSelect: (courseName: string) => void;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: index * 0.1 + 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 + 0.4 },
    },
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 + 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 pointer-events-none"
      />

      <div>
        <div className="flex items-center gap-3 mb-4">
          <motion.span
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="text-3xl"
          >
            {course.icon}
          </motion.span>
          <motion.h3
            variants={contentVariants}
            initial="initial"
            animate="animate"
            className="text-xl font-bold text-gray-800"
          >
            {course.name}
          </motion.h3>
        </div>
        <motion.p
          variants={contentVariants}
          initial="initial"
          animate="animate"
          className="text-gray-600 text-sm leading-relaxed mb-6"
        >
          {course.description}
        </motion.p>
        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center text-blue-600 mb-6"
        >
          <span className="font-medium">{course.lessons} lecții</span>
        </motion.div>
      </div>

      <motion.button
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        onClick={() => onCourseSelect(course.name)}
        className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">Rezervă o lecție gratuită</span>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "100%", opacity: 0.3 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-white"
        />
      </motion.button>
    </motion.div>
  );
};

const Courses = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  // Handler for course selection
  const handleCourseSelect = (courseName: string) => {
    setSelectedCourse(courseName);
    setShowContactForm(true);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const courses = [
    {
      name: "BAC la Istoria Românilor și Universală",
      description:
        "Recapitulează toate epocile istorice într-un timp record și rezolvă teste pe surse, hărți și eseuri",
      lessons: 17,
      icon: "📚",
    },
    {
      name: "BAC la Limba și Literatura Română",
      description:
        "Lecții pe genurile și curentele literare, figurile de stil; analiza operelor și personajelor literare",
      lessons: 18,
      icon: "📖",
    },
    {
      name: "BAC la Matematică",
      description:
        "Rezolvă probleme din testele de BAC prin multiple metode, conform baremului de punctare",
      lessons: 20,
      icon: "🔢",
    },
    {
      name: "BAC la Limba Străină",
      description: "Cursuri practice la Limba Engleză și Franceză pentru BAC",
      lessons: 18,
      icon: "🌍",
    },
    {
      name: "BAC la Geografie",
      description:
        "Recapitulează geografia fizică generală, geografia umană și națională",
      lessons: 18,
      icon: "🌎",
    },
    {
      name: "BAC la Chimie",
      description:
        "Asimilează toate temele din programul pentru BAC: chimia generală, organică, anarganică și analitică",
      lessons: 18,
      icon: "🧪",
    },
    {
      name: "BAC la Biologie",
      description:
        "Asimilează toată programa de BAC și rezolvă probleme de biologie",
      lessons: 20,
      icon: "🧬",
    },
    {
      name: "BAC la Informatică",
      description:
        "Asimilează limbajele de calcul și practică problemele conform baremului",
      lessons: 18,
      icon: "💻",
    },
    {
      name: "Examenul de clasa 9-a",
      description:
        "Absolvește cu succes gimnaziul trecând cu ușurință examenul la Română, Matematică și Istorie",
      lessons: [10, ", ", 13, ", ", 20],
      icon: "📝",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={headerRef}
            variants={headerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl font-bold bg-gradient-to-r from-[#2D3436] to-[#377DFF] bg-clip-text text-transparent mb-6"
            >
              Cursurile Noastre pentru BAC
            </motion.h2>
            <motion.p variants={textVariants} className="text-lg text-gray-600">
              Pregătește-te pentru examene cu cei mai buni profesori
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  course={course}
                  index={index}
                  onCourseSelect={handleCourseSelect}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <TopGContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        preselectedCourse={selectedCourse}
      />
    </>
  );
};

export default Courses;
