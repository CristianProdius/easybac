"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import TopGContactForm from "../shared/topGContactForm";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Teacher {
  name: string;
  subject: string;
  image: string;
  description: string;
}

const TeacherCard = ({
  teacher,
  index,
}: {
  teacher: Teacher;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="px-4 group cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.2 }}
    >
      <div
        className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={teacher.image}
          alt={teacher.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="mt-6 space-y-2">
        <h3 className="text-xl font-bold text-[#2D3436]">{teacher.name}</h3>
        <p className="text-[#377DFF] font-medium">{teacher.subject}</p>
        <p className="text-gray-600 leading-relaxed">{teacher.description}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const ctaRef = useRef(null);
  const isCTAInView = useInView(ctaRef, { once: true });
  const [showTeachertForm, setShowTeachertForm] = useState(false);
  const selectedCourse = ""; // Define the selectedCourse variable

  const teachers = [
    {
      name: "Dionis",
      subject: "Istorie",
      image: "/team/1.jpg",
      description:
        "Mentor, olimpic republican, autor de cercetări și studii istorice",
    },
    {
      name: "Daniela",
      subject: "Matematică",
      image: "/team/7.jpg",
      description: "Mentor, olimpic republican, experiență pedagogică de 6 ani",
    },
    {
      name: "Ion",
      subject: "Limba română",
      image: "/team/4.jpg",
      description:
        "Mentor, olimpic republican, autor de cercetării și studii filologice",
    },
    {
      name: "Gabriela",
      subject: "Limba română",
      image: "/team/8.jpg",
      description: "Mentorul cursurilor pentru clasa a 9-a",
    },
    {
      name: "Roxana",
      subject: "Geografie",
      image: "/team/3.jpg",
      description:
        "Mentor, olimpic republican, profesor la Liceul Orizont din Chișinău",
    },
    {
      name: "Andrei",
      subject: "Chimie",
      image: "/team/6.jpg",
      description: "Mentor, olimpic internațional",
    },
    {
      name: "Irina",
      subject: "Biologie",
      image: "/team/2.jpg",
      description: "Mentor, olimpic republican, experiență pedagogică de 5 ani",
    },
    {
      name: "Maxim",
      subject: "Informatica",
      image: "/team/5.jpg",
      description: "Mentor, olimpic republican, programist IT",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isHeaderInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm mb-6"
            >
              <span className="bg-gradient-to-r from-[#377DFF] to-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Echipa
              </span>
              <span className="ml-2 text-sm text-gray-600">
                Profesori Experimentați
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
              Experți în Pregătirea pentru BAC
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg"
            >
              Profesorii noștri sunt dedicați succesului tău, cu ani de
              experiență în pregătirea elevilor pentru examenul de bacalaureat
            </motion.p>
          </motion.div>

          {/* Slider Section */}
          <div className="container mx-auto px-6">
            <div className="mt-16 relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{
                  clickable: true,
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="!pb-14"
              >
                {teachers.map((teacher, index) => (
                  <SwiperSlide key={index}>
                    <TeacherCard teacher={teacher} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Join Team CTA */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isCTAInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12 shadow-lg"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCTAInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold bg-gradient-to-r from-[#2D3436] to-[#377DFF] bg-clip-text text-transparent mb-4"
            >
              Devino Parte din Echipa Noastră
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCTAInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.3 }}
              className="text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Suntem mereu în căutare de profesori pasionați și dedicați care
              doresc să ajute elevii să exceleze la BAC.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowTeachertForm(true)}
              className="bg-gradient-to-r from-[#377DFF] to-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-shadow"
            >
              Aplică ca Profesor
            </motion.button>
          </motion.div>
        </div>
      </section>
      <TopGContactForm
        isOpen={showTeachertForm}
        onClose={() => setShowTeachertForm(false)}
        preselectedCourse={selectedCourse}
        isTeacherForm={true}
      />
    </>
  );
};

export default Team;