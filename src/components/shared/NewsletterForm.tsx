"use client";
import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Vă rugăm să introduceți o adresă de email validă");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Subscription failed");

      setStatus("success");
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch {
      setStatus("error");
      setErrorMessage("A apărut o eroare. Vă rugăm să încercați din nou.");
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Abonează-te la Newsletter</h3>
      <p className="text-gray-400 mb-4">
        Primește noutăți și sfaturi pentru pregătirea BAC-ului
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email-ul tău"
            className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#377DFF]"
            disabled={status === "loading"}
          />
          {errorMessage && (
            <p className="absolute -bottom-6 left-0 text-red-500 text-sm">
              {errorMessage}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#377DFF] text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed relative overflow-hidden"
        >
          {status === "loading" ? (
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
          ) : status === "success" ? (
            <span className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
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
              Subscris cu succes!
            </span>
          ) : (
            "Abonează-te"
          )}
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
