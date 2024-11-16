"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isOpen,
  onClose,
  preselectedCourse = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: preselectedCourse,
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      course: preselectedCourse,
    }));
  }, [preselectedCourse]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState("");

  const validatePhone = (phone: string) => {
    const phoneRegex = /^(?:\+373|0)(?:6[789]|7[89])\d{6}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");

    // Validate phone number
    if (!validatePhone(formData.phone)) {
      setError("Vă rugăm să introduceți un număr de telefon valid din Moldova");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      setShowConfirmation(true);
      setTimeout(() => {
        onClose();
        setShowConfirmation(false);
        setFormData({ name: "", phone: "", course: preselectedCourse });
      }, 3000);
    } catch {
      setError("A apărut o eroare. Vă rugăm să încercați din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

  function handleChange(e: {
    target: { name: string; value: string | number };
  }) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const courses = [
    "BAC la Istoria Românilor și Universală",
    "BAC la Limba și Literatura Română",
    "BAC la Matematică",
    "BAC la Limba Străină",
    "BAC la Geografie",
    "BAC la Chimie",
    "BAC la Biologie",
    "BAC la Informatică",
    "Examenul de clasa 9-a",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {showConfirmation ? (
              <div className="text-center py-8">
                <svg
                  className="w-16 h-16 text-green-500 mx-auto mb-4"
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
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mulțumim pentru înregistrare!
                </h3>
                <p className="text-gray-600">
                  Vă vom contacta în curând pentru mai multe detalii.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Înregistrare la curs
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nume și Prenume
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ex: Ion Creangă"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Număr de telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ex: +37369123456"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="course"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Cursul
                    </label>
                    <select
                      id="course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selectează cursul</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#377DFF] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Se procesează...
                      </span>
                    ) : (
                      "Înregistrează-te"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
